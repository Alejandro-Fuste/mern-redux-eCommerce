import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import helpers from "../utils/helpers";

import imageSrc from "../assets/success.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { idbPromise } = helpers;

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      // setTimeout(() => {
      //   window.location.assign("/shop");
      // }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Image src={imageSrc} alt="Credit Card" id="creditCard" />
        </Col>
      </Row>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the homepage</h2>
      </Jumbotron>
    </Container>
  );
}

export default Success;
