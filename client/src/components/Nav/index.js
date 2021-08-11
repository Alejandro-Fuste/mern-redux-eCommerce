import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import Cart from "../Cart";
import CartModal from "../CartModal";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" id="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="link">
            {/* <FontAwesomeIcon icon={faHome} className="icon" />Home */}
            Home
          </Nav.Link>
          <Nav.Link href="#about">
            {/* <FontAwesomeIcon icon={faUser} className="icon" /> */}
            About
          </Nav.Link>
          <Nav.Link href="#portfolio">
            {/* <FontAwesomeIcon icon={faTh} className="icon" /> */}
            Portfolio
          </Nav.Link>
          <Nav.Link href="#contact">
            {/* <FontAwesomeIcon icon={faEnvelope} className="icon" /> */}
            Contact
          </Nav.Link>
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
