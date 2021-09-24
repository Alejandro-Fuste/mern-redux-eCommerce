import React from "react";
import Image from "../components/Image";
import TextBox from "../components/TextBox";
import Jumbotron from "../components/Jumbotron";

import imageSrc from "../assets/noMatch.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NoMatch = () => {
  return (
    <Container fluid id="noMatchContainer">
      <Row>
        <Col xs={12} id="noMatchCol">
          <div id="noMatchImgDiv">
            <span id="backgroundCircle"></span>
            <Image src={imageSrc} alt="No Match" id="noMatchImage" />
          </div>
          <TextBox id="successTextBox">
            <p>Oops, something went wrong!</p>
          </TextBox>
        </Col>
      </Row>
    </Container>

    // <div>
    //   <Jumbotron>
    //     <h1>404 Page Not Found</h1>
    //     <h1>
    //       <span role="img" aria-label="Face With Rolling Eyes Emoji">
    //         🙄
    //       </span>
    //     </h1>
    //   </Jumbotron>
    // </div>
  );
};

export default NoMatch;
