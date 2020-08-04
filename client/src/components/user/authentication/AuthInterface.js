import React, { useContext } from "react";
import Form from "./Form";
import LoginTests from "./LoginTests";

import UserContext from "../UserContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AuthInterface() {
  const { handleLogin, handleRegister } = useContext(UserContext);
  const registrationFormData = {
    title: "Register",
    fieldData: [
      {
        controlId: "formBasicName",
        formLabel: "Name",
        attributes: {
          name: "name",
          type: "text",
          placeholder: "Enter Name",
        },
      },
      {
        controlId: "formBasicEmail",
        formLabel: "Email",
        attributes: {
          name: "email",
          type: "email",
          placeholder: "Enter Email",
        },
      },
      {
        controlId: "formBasicPassword",
        formLabel: "Password",
        attributes: {
          name: "password",
          type: "password",
          placeholder: "Create Password",
        },
      },
    ],
    buttonData: [
      {
        varient: "primary",
        type: "submit",
        value: "Register",
        handleClick: handleRegister,
      },
    ],
  };
  const loginFormData = {
    title: "Login",
    fieldData: [
      {
        controlId: "formBasicEmail",
        formLabel: "Email",
        attributes: {
          name: "email",
          type: "email",
          placeholder: "Enter Email",
        },
      },
      {
        controlId: "formBasicPassword",
        formLabel: "Password",
        attributes: {
          name: "password",
          type: "password",
          placeholder: "Create Password",
        },
      },
    ],
    buttonData: [
      {
        varient: "primary",
        type: "submit",
        value: "Login",
        handleClick: handleLogin,
      },
      {
        varient: "outline-primary",
        type: "submit",
        value: "Forgot My Password",
        handleClick: () => {
          alert("You forgot.");
        },
      },
    ],
  };
  return (
    <Container>
      <Row>
        <Form formData={loginFormData}>
          <LoginTests />
        </Form>
        <Form formData={registrationFormData} />
      </Row>
    </Container>
  );
}

export default AuthInterface;
