import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import helpers from "../utils/helpers";
import Image from "../components/Image";
import TextBox from "../components/TextBox";

import imageSrc from "../assets/success.svg";
import slantImg from "../assets/slant.svg";

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
    <Container fluid id="successContainer">
      <Row>
        <Col xs={12}>
          {/* <div id="slantDiv"></div> */}
          <Image src={slantImg} alt="Slant" id="slantImg" />
        </Col>
      </Row>
      <Row id="successRow">
        <Col xs={12} id="successCol">
          <Image src={imageSrc} alt="Success" id="successImage" />
          <TextBox id="successTextBox">
            <h1>Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to the homepage</h2>
          </TextBox>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <TextBox id="successTextBox">
            <h1>Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to the homepage</h2>
          </TextBox>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Success;
