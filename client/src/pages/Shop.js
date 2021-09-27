import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
// import Jumbotron from "../components/Jumbotron";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Shop = () => {
  return (
    <Container fluid id="productsContainer">
      <Nav navbarLinks="shopNavLinks" logoName="shopLogoName" />
      <Row id="categoryRow">
        <Col xs={12}>
          <CategoryMenu />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
