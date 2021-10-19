import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import Button from "../components/Button";
import Image from "../components/Image";
import logo from "../assets/logo.svg";
import loginImage2 from "../assets/loginImage2.svg";

function Login() {
  const [show, setShow] = useState(true);
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
      <Row xs={12} id="loginRow">
        <Col xs={12} xl={7} id="leftLoginCol">
          <span className="tagLineText">Log in to start saving!</span>
          <Image src={loginImage2} alt="Login" id="loginImage" />
        </Col>

        <Col xs={12} xl={5} id="rightLoginCol">
          <Link to="/" id="logoHeader">
            <Image src={logo} alt="logo" id="logoSignUp" />
            <h1 id="shopName">A-Shop</h1>
          </Link>

          <Form onSubmit={handleFormSubmit} className="loginForm">
            <h2 className="loginH2">Login</h2>
            <Form.Group className="mb-3">
              <Form.Label className="inputForm">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="youremail@test.com"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="inputForm">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*******"
                name="password"
                id="pwd"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </Form.Text>
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
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Test Login & Credit Card
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                You can test out this application by using the following
                credentials: <br></br>
                <br></br>
                <strong>luke.skywalker@testmail.com</strong> <br></br>
                <strong>password12345</strong> <br></br>
                <br></br>
                When you get to the checkout page, you can also use the
                following test credit card number: <br></br>
                <br></br>
                <strong>4242 4242 4242 4242</strong> <br></br>
                <br></br>
                The other credit card information can be made up.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                name="Close"
                id="detailAddButton"
                onClick={() => setShow(false)}
              ></Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
