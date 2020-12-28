import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import UserContext from "../UserContext";
import LoginTests from "./LoginTests";

function AuthInterface() {
  const { handleLogin, handleRegister } = useContext(UserContext);

  //Input Fields
  const { name, email, password } = {
    name: {
      label: "Name",
      attributes: {
        name: "name",
        type: "text",
        placeholder: "Enter Name",
      },
    },
    email: {
      label: "Email",
      attributes: {
        name: "email",
        type: "email",
        placeholder: "Enter Email",
      },
    },
    password: {
      label: "Password",
      attributes: {
        name: "password",
        type: "password",
        placeholder: "Create Password",
      },
    },
  };
  // Submit Buttons
  const { register, login, forgot } = {
    register: {
      varient: "btn-primary",
      type: "submit",
      value: "Register",
    },
    login: {
      varient: "btn-primary",
      type: "submit",
      value: "Login",
    },
    forgot: {
      varient: "btn-outline-primary",
      type: "submit",
      value: "Forgot My Password",
    },
  };

  // Form Data
  const registerFormData = {
    title: "Register",
    fields: [name, email, password],
    buttons: [register],
  };
  const loginFormData = {
    title: "Login",
    fields: [email, password],
    buttons: [login, forgot],
  };

  return (
    <div className="container-fluid row">
      <AuthForm
        formData={loginFormData}
        handleAuth={(data) => handleLogin(data)}
      >
        <LoginTests />
      </AuthForm>
      <AuthForm
        formData={registerFormData}
        handleAuth={(data) => handleRegister(data)}
      />
    </div>
  );
}

export default AuthInterface;
