import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Logo from "../../assets/logo.svg";
import "./style.css";

import CartModal from "../CartModal";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSignOutAlt,
  faShoppingBag,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navi({ navbarLinks, logoName }) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div id="newNavContainer">
          <div id="linksContainer">
            <Link to="/" className={navbarLinks}>
              <FontAwesomeIcon icon={faHome} className="navIcons" /> Home
            </Link>

            <Link to="/shop" className={navbarLinks}>
              <FontAwesomeIcon icon={faShoppingBag} className="navIcons" /> Shop
            </Link>

            <Link to="/orderHistory" className={navbarLinks}>
              <FontAwesomeIcon icon={faHistory} className="navIcons" /> Order
              History
            </Link>

            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} className={navbarLinks}>
              <FontAwesomeIcon icon={faSignOutAlt} className="navIcons" />{" "}
              Logout
            </a>
          </div>

          <div id="otherLinksContainer">
            <FontAwesomeIcon icon={faSearch} className="otherLinks" />
            <FontAwesomeIcon icon={faUser} className="otherLinks" />
            <CartModal id="responsiveCartButton" />
          </div>
        </div>
      );
    } else {
      return (
        <Container id="loginSignUpWrapper">
          <Link to="/signup" id="SignupLink">
            Signup
          </Link>

          <Link to="/login" id="loginLink">
            Login
          </Link>
        </Container>
      );
    }
  }

  return (
    <Nav id="navParent">
      <Navbar id="navbar" expand="xl" variant="light">
        <Container fluid id="wrapper">
          <Navbar.Brand href="/" id={logoName}>
            <span role="img" aria-label="logo name" id="logoSpan">
              <img src={Logo} alt="logo" id="logo" />
            </span>
            A-Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Container id="innerWrapper">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>{showNavigation()}</Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </Nav>
  );
}

export default Navi;
