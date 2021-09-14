import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import CartModal from "../CartModal";
import Logo from "../../assets/logo.svg";
import "./style.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSignOutAlt,
  faShoppingBag,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Navi() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/" className="navbarLinks">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>

          <Link to="/shop" className="navbarLinks">
            <FontAwesomeIcon icon={faShoppingBag} /> Shop
          </Link>

          <Link to="/orderHistory" className="navbarLinks">
            <FontAwesomeIcon icon={faHistory} /> Order History
          </Link>

          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()} className="navbarLinks">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </a>

          <CartModal />
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup" id="SignupLink">
            Signup
          </Link>

          <Link to="/login" id="loginLink">
            Login
          </Link>
        </>
      );
    }
  }

  return (
    <Nav id="navParent">
      <Navbar id="navbar" expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <span role="img" aria-label="shopping bag">
            <img src={Logo} alt="logo" id="logo" />
          </span>
          A-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>{showNavigation()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
  );
}

export default Navi;
