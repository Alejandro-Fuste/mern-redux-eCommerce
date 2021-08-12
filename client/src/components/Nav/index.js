import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
// import Cart from "../Cart";
import CartModal from "../CartModal";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navi() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/orderHistory">Order History</Link>

          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">Signup</Link>

          <Link to="/login">Login</Link>
        </>
      );
    }
  }

  return (
    <Nav className="navParent">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          -Shop-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {showNavigation()}
            <CartModal />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
  );
}

export default Navi;

// {
//   /* <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="shopping bag">
//             🛍️
//           </span>
//           -Shop-Shop
//         </Link>
//       </h1>

//       <nav>{showNavigation()}</nav>
//       <CartModal />
//     </header> */
// }

// function showNavigation() {
//   if (Auth.loggedIn()) {
//     return (
//       <ul className="flex-row">
//         <li className="mx-1">
//           <Link to="/orderHistory">Order History</Link>
//         </li>
//         <li>
//           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//           <a href="/" onClick={() => Auth.logout()}>
//             Logout
//           </a>
//         </li>
//       </ul>
//     );
//   } else {
//     return (
//       <ul className="flex-row">
//         <li className="mx-1">
//           <Link to="/signup">Signup</Link>
//         </li>
//         <li className="mx-1">
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     );
//   }
// }
