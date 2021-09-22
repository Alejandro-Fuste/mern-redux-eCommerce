import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Button from "../components/Button";
import Image from "../components/Image";
// import Nav from "../components/Nav";
import logo from "../assets/logo.svg";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container fluid id="loginContainer">
      {/* <Nav /> */}
      <Row id="loginRow">
        <Col xs={7} id="leftLoginCol">
          <span className="tagLineText">Log in to start saving!</span>
        </Col>
        <Col id="rightLoginCol">
          <div id="logoHeader">
            <Image src={logo} alt="logo" id="logo" />
            <h1 id="shopName">A-Shop</h1>
          </div>
          <Form onSubmit={handleFormSubmit} className="loginForm">
            <h2 className="loginH2">Login</h2>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="youremail@test.com"
                name="email"
                id="email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <Button
              name="Log In"
              type="submit"
              nameForClass="formButton"
            ></Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
