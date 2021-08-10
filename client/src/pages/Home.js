import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <CategoryMenu />
      <ProductList />
      <Cart />
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
