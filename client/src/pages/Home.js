import React from "react";
import Image from "../components/Image";
import TextBox from "../components/TextBox";
// import Button from "../components/Button";
import Footer from "../components/Footer";

import imageSrc from "../assets/CreditCardBlue.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Image src={imageSrc} alt="Credit Card" id="creditCard" />
        </Col>
        <Col xs={12} id="textBox">
          <TextBox
            textHeading="E-Commerce App"
            pText="Welcome to my E-Commerce application! This app is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) app. Along with using React for the frontend and Node/Express for the backend, it also uses GraphQL language and Redux library. Click the login button and try out this app!"
            textBookHeading="textBookHeading"
            textBoxParagraph="textBoxParagraph"
          />
          {/* <Button name="Login" type="button" id="catergoryButton" /> */}
          <Link to="/login" id="linkToLogin">
            Login
          </Link>
        </Col>
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
