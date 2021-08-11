import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <CategoryMenu />
        </Col>
        <Col xs={4}>
          <Cart />
        </Col>
      </Row>
      <Row>
        <ProductList />
      </Row>
    </Container>
  );
};

// const Home = () => {
//   return (
//     <div className="container">
//       <CategoryMenu />
//       <ProductList />
//       <Cart />
//     </div>
//   );
// };

export default Home;
