import React from "react";
import Image from "../components/Image";

import { ReactComponent as Wave } from "../assets/wave1.svg";
import imageSrc from "../assets/CreditCardBlue.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <Row xs={12}>
        <Col>
          <Wave />
          <Image src={imageSrc} alt="Credit Card" id="creditCard" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
