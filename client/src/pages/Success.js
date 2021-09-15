import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import helpers from "../utils/helpers";
import Jumbotron from "../components/Jumbotron";
import Image from "../components/Image";
import TextBox from "../components/TextBox";

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
    <Container id="successContainer">
      <Row>
        <Col xs={12}>
          <Image src={imageSrc} alt="Success" id="successImage" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextBox id="successTextBox">
            <h1>Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to the homepage</h2>
          </TextBox>
          {/* <Jumbotron>
            <h1>Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to the homepage</h2>
          </Jumbotron> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Success;
