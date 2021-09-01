import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <CategoryMenu />
        </Col>
      </Row>
      <Row>
        <ProductList />
      </Row>
    </Container>
  );
};

export default Home;
