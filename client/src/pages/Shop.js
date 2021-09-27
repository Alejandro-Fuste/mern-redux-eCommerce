import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Image from "../components/Image";
import TextBox from "../components/TextBox";

import imageSrc from "../assets/camera.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Shop = () => {
  return (
    <Container fluid id="productsContainer">
      <Nav navbarLinks="shopNavLinks" logoName="shopLogoName" />
      <Row id="categoryRow">
        <Col xs={12}>
          <Jumbotron id="jumboContainer">
            <TextBox id="shopTextBox">
              <h2>Camera</h2>
            </TextBox>
            <Image src={imageSrc} alt="Shop Header" id="shopImage" />
          </Jumbotron>
          <CategoryMenu />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
