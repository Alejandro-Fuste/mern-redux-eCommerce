import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import helpers from "../../utils/helpers";
import Button from "../Button";

import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { idbPromise, pluralize } = helpers;

function ProductItem(item) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
      setShow(true);
    }
  };

  return (
    <>
      <div className="card px-1 py-1">
        <Link to={`/products/${_id}`}>
          <img alt={name} src={`/images/${image}`} />
          <p>{name}</p>
        </Link>
        <div>
          <div>
            {quantity} {pluralize("item", quantity)} in stock
          </div>
          <span>${price}</span>
        </div>
        <Button
          name="Add to Cart"
          type="submit"
          id="cardButton"
          onClick={addToCart}
        ></Button>
      </div>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="../../assets/logo.svg"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">A-Shop</strong>
            </Toast.Header>
            <Toast.Body>Oh snap! You added an item to your cart!</Toast.Body>
          </Toast>
        </Col>
        {/* <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col> */}
      </Row>
    </>
  );
}

export default ProductItem;
