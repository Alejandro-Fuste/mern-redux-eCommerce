import React from "react";
import BlueGif from "../assets/CreditCardBlue.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <Row xs={12}>
        <Col>
          <span>
            <img src={BlueGif} alt="Credit Cart Payment" />
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
