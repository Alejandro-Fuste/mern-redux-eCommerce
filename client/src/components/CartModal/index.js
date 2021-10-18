import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import helpers from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import CustomButton from "../Button";
import CustomError from "../Error";
import "./style.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const { idbPromise } = helpers;

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function CartModal({ id }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [getCheckout, { loading, error, data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({
        type: ADD_MULTIPLE_TO_CART,
        products: [...cart],
      });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  function numberOfCartItems() {
    if (!state.cart.length) {
      return <span className="noCartBadge"></span>;
    } else {
      return <span className="cartBadge">{state.cart.length}</span>;
    }
  }

  return (
    <>
      <Button variant="primary" id={id} onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {numberOfCartItems()}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state.cart.length ? (
            <div>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}

              <div id="cartBottom">
                <strong id="strongTotal">Total: ${calculateTotal()}</strong>

                {Auth.loggedIn() ? (
                  <CustomButton
                    name={
                      loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Checkout"
                      )
                    }
                    type="submit"
                    id="checkoutButton"
                    onClick={submitCheckout}
                  ></CustomButton>
                ) : (
                  <span>log in to check out</span>
                )}
              </div>
            </div>
          ) : (
            <CustomError
              h3ClassName="noItemsMessage"
              spanClassName="noItemsImage"
              ariaLabel="shocked"
              text="You haven't added anything to your cart yet!"
            />
          )}
          {error ? (
            <CustomError
              h3ClassName="noItemsMessage"
              spanClassName="noItemsImage"
              ariaLabel="shocked"
              text="Opps, something went wrong! Refresh and try again."
            />
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal;
