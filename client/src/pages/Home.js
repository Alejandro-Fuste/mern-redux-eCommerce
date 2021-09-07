import React from "react";
import BlueGif from "../assets/CreditCardPaymentBlue.gif";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <Row xs={12}>
        <Col>
          <img src={BlueGif} alt="Credit Cart Payment" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
