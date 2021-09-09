import React from "react";
import Image from "../components/Image";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Footer from "../components/Footer";

import imageSrc from "../assets/CreditCardBlue.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula. Elementum nibh tellus molestie nunc. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. "
            textBookHeading="textBookHeading"
            textBoxParagraph="textBoxParagraph"
          />
          <Button name="Login" type="button" id="catergoryButton" />
          {/* <Footer /> */}
        </Col>
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
