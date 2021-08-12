import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Cart from "../Cart";
import CartModal from "../CartModal";

import Navbar from "react-bootstrap/Navbar";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav.Link href="/orderHistory">Order History</Nav.Link>

          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/signup">Signup</Nav.Link>

          <Nav.Link href="/login">Login</Nav.Link>
        </>
      );
    }
  }

  return (
    <Navbar expand="lg" variant="dark">
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
  );
}

export default Nav;

{
  /* <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
      <CartModal />
    </header> */
}

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
