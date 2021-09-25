import React from "react";
import { Link } from "react-router-dom";
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
      <Row id="noMatchRow">
        <Col xs={12} id="noMatchCol">
          <div id="noMatchImgDiv">
            <Image src={imageSrc} alt="No Match" id="noMatchImage" />
          </div>
          <TextBox id="noMatchTextBox">
            <p id="noMatchText">Oops, something went wrong!</p>
            <Link to="/shop" id="linkToShop">
              Back to shopping
            </Link>
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
