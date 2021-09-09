import React from "react";
import Image from "../components/Image";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Footer from "../components/Footer";

import { ReactComponent as Wave } from "../assets/wave1.svg";
import imageSrc from "../assets/CreditCardBlue.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <Row xs={12}>
        <Col>
          <Wave />
          <Image src={imageSrc} alt="Credit Card" id="creditCard" />
          <TextBox
            textHeading="Text Heading"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula. Elementum nibh tellus molestie nunc. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. "
          />
          <Button name="Login" type="button" id="catergoryButton" />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
