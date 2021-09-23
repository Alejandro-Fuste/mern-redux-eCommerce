import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Button from "../components/Button";
import Image from "../components/Image";
import logo from "../assets/logo.svg";
import loginImage2 from "../assets/loginImage2.svg";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutuationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutuationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container fluid id="signUpContainer">
      <Row id="signUpRow">
        <Col xs={7} id="leftSignUpCol">
          <span className="tagLineText">Sign up to start saving!</span>
          <Image src={loginImage2} alt="Login" id="loginImage" />
        </Col>
        <Col id="rightSignUpCol">
          <div id="signUpHeader">
            <Image src={logo} alt="logo" id="logo" />
            <h1 id="shopName">A-Shop</h1>
          </div>

          <Form onSubmit={handleFormSubmit} className="signUpForm">
            <h2 className="signUpH2">Sign Up</h2>

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="lastName"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="youremail@test.com"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*******"
                name="password"
                id="pwd"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              name="Sign Up"
              type="submit"
              nameForClass="formButton"
            ></Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
