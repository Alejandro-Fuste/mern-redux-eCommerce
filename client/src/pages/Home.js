import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import TextBox from "../components/TextBox";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import imageSrc from "../assets/CreditCardBlue.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid style={{ padding: "0px" }} id="homeContainer">
      <Nav />
      <Row className="homeRow">
        <Col xs={12}>
          <Image src={imageSrc} alt="Credit Card" id="creditCard" />
        </Col>
      </Row>
      <Row className="homeRow">
        <Col xs={12} id="textBox">
          <TextBox id="homeTextbox">
            <h2 id="textBoxHeading">E-Commerce App</h2>
            <p id="textBoxParagraph">
              Welcome to my E-Commerce application! This app is a full-stack
              MERN (MongoDB, Express.js, React.js, Node.js) app. Along with
              using React for the frontend and Node/Express for the backend, it
              also uses GraphQL language and Redux library. Click the login
              button and try out this app!
            </p>
          </TextBox>
          <Link to="/login" id="linkToLogin">
            Login
          </Link>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
