import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Shop = () => {
  return (
    <Container fluid id="productsContainer">
      <Row id="categoryRow">
        <Col xs={12}>
          <CategoryMenu />
        </Col>
      </Row>
      <Row id="productRow">
        <ProductList />
      </Row>
    </Container>
  );
};

export default Shop;
