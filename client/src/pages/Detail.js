import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import helpers from "../utils/helpers";
import spinner from "../assets/spinner.gif";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import Nav from "../components/Nav";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const { idbPromise } = helpers;

function Detail() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
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
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
      setShow(true);
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
    setShow2(true);
  };

  return (
    <Container fluid id="detailContainer">
      <Row id="detailNavRow">
        <Col sm={12}>
          <Nav />
        </Col>
      </Row>
      <Row id="detailRow">
        <Col sm={12} id="detailCol">
          {currentProduct && cart ? (
            <div id="detailDiv">
              <img
                src={`/images/transparentImages/${currentProduct.image}`}
                alt={currentProduct.name}
              />
              <div className="detailInnerDiv">
                <h2 id="detailH2">{currentProduct.name}</h2>
                <Link to="/shop">← Back to Products</Link>
              </div>

              <div className="detailInnerDiv">
                <p id="detailH2">
                  <strong>Price:</strong>${currentProduct.price}{" "}
                </p>

                <div>
                  <Button
                    name="Add to Cart"
                    type="submit"
                    id="detailAddButton"
                    onClick={addToCart}
                  ></Button>

                  <Button
                    name="Remove from Cart"
                    type="submit"
                    id="cardButton"
                    disabled={!cart.find((p) => p._id === currentProduct._id)}
                    onClick={removeFromCart}
                  ></Button>
                </div>
              </div>
            </div>
          ) : null}
          {loading ? <img src={spinner} alt="loading" /> : null}
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

          <Modal
            show={show2}
            onHide={() => setShow2(false)}
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
              <p>Dang, you removed an item from your cart!</p>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
