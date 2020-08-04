import React, { useState, useContext } from "react";
import UserContext from "../UserContext";

import LoginTests from "./LoginTests";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = ({ setIsLoggingIn }) => {
  const { handleLogin } = useContext(UserContext);

  //Login Input Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <h1>Log In</h1>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              className="mr-3"
              variant="primary"
              type="submit"
              onClick={(e) => handleLogin(e, email, password)}
            >
              Submit
            </Button>

            <Button variant="outline-primary" type="button">
              Register
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="mt-4">Test Cases</h2>
          <LoginTests handleLogin={handleLogin} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
