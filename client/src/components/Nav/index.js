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
  faUserPlus,
  faSignInAlt,
  faHistory,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Navi() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/orderHistory" className="navbarLinks">
            <FontAwesomeIcon icon={faHistory} /> Order History
          </Link>

          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()} className="navbarLinks">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup" className="navbarLinks">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>

          <Link to="/login" className="navbarLinks">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
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
          <Nav>
            {showNavigation()}
            <CartModal />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
  );
}

export default Navi;
