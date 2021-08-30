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
import "./style.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const { idbPromise } = helpers;

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function CartModal() {
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

  return (
    <>
      <Button variant="primary" id="cartButton" onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faShoppingCart} />
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
                    id="cardButton"
                    onClick={submitCheckout}
                  ></CustomButton>
                ) : (
                  <span>log in to check out</span>
                )}
              </div>
            </div>
          ) : (
            <h3 id="noItemsMessage">
              <span role="img" aria-label="shocked" id="noItemsImage">
                😱
              </span>
              You haven't added anything to your cart yet!
            </h3>
          )}
          {/* {loading ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Loading...
            </Button>
          ) : null} */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal;
