import React, { useContext } from "react";
import FormArea from "./FormArea";
import LoginTests from "./LoginTests";

import UserContext from "../UserContext";

function AuthInterface() {
  const { handleLogin, handleRegister } = useContext(UserContext);
  const registrationFormData = {
    title: "Register",
    fieldData: [
      {
        controlId: "formRegisterBasicName",
        formLabel: "Name",
        attributes: {
          name: "name",
          type: "text",
          placeholder: "Enter Name",
        },
      },
      {
        controlId: "formRegisterBasicEmail",
        formLabel: "Email",
        attributes: {
          name: "email",
          type: "email",
          placeholder: "Enter Email",
        },
      },
      {
        controlId: "formRegisterBasicPassword",
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
        id: "registerButton",
        varient: "btn-primary",
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
        controlId: "formLoginBasicEmail",
        formLabel: "Email",
        attributes: {
          name: "email",
          type: "email",
          placeholder: "Enter Email",
        },
      },
      {
        controlId: "formLoginBasicPassword",
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
        id: "loginButton",
        varient: "btn-primary",
        type: "submit",
        value: "Login",
        handleClick: handleLogin,
      },
      {
        id: "forgotMyPasswordButton",
        varient: "btn-outline-primary",
        type: "submit",
        value: "Forgot My Password",
        handleClick: () => {
          alert("You forgot.");
        },
      },
    ],
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <FormArea formData={loginFormData}>
          <LoginTests />
        </FormArea>
        <FormArea formData={registrationFormData} />
      </div>
    </div>
  );
}

export default AuthInterface;
