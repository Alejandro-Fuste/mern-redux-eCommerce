import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import CartModal from "../components/CartModal";
import Jumbotron from "../components/Jumbotron";
import Image from "../components/Image";
import TextBox from "../components/TextBox";

import imageSrc from "../assets/camera.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Shop = () => {
  return (
    <Container fluid id="shopContainer">
      <header id="shopHeader">
        <Nav navbarLinks="shopNavLinks" logoName="shopLogoName" />
        <CartModal id="shopCartButton" />
      </header>
      <Row id="categoryRow">
        <Col xs={12} id="categoryCol">
          <Jumbotron id="jumboContainer">
            <TextBox id="shopTextBox">
              <h2 id="shopTextBoxH2">Camera</h2>
              <h5 id="shopTextBoxhH5">New Product</h5>
              <Link to="products/614a3c5fb78888d00b8f9d1b" id="textBoxLink">
                View Product
              </Link>
            </TextBox>
            <Image src={imageSrc} alt="Shop Header" id="shopImage" />
          </Jumbotron>
          <div id="categoryDiv">
            <CategoryMenu />
          </div>
        </Col>
      </Row>
      <Row id="productRow">
        <Col id="productCol">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
