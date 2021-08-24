import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import helpers from "../../utils/helpers";
import Button from "../Button";
import Logo from "../../assets/logo.svg";

import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

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
      setShow(true);
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <img src={Logo} alt="logo" />
          <Modal.Title id="example-custom-modal-styling-title">
            A-Shop
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Oh snap! You added an item to your cart!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductItem;

{
  /* <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> */
}
