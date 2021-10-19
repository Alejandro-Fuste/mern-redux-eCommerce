import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./style.css";

import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function ProductItem(item) {
  const [show, setShow] = useState(false);
  const { image, name, _id, price } = item;

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/transparentImages/${image}`}
        />
        <Card.Body>
          <Card.Title id="productName">{name}</Card.Title>
          <div id="priceButtonDiv">
            <Card.Text id="cardPrice">${price}</Card.Text>
            <Link to={`/products/${_id}`} id="cardButton">
              +
            </Link>
          </div>
        </Card.Body>
      </Card>
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
