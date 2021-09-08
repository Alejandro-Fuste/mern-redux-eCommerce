import React from "react";
import WaveBorder from "../components/WaveBorder";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <Row xs={12}>
        <Col>
          <WaveBorder />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
