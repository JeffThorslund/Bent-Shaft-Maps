import React from "react";
import Button from "react-bootstrap/Button";

const LoginTests = ({ handleLogin }) => {
  //Test Cases
  const testCases = [
    {
      type: "Valid Login",
      email: "Test@tester.com",
      password: "123456",
    },
    {
      type: "Invalid Email",
      email: "Testtester.com",
      password: "123456",
    },
    {
      type: "Invalid Password",
      email: "Test@tester.com",
      password: "12345",
    },
    {
      type: "Email Does Not Exist",
      email: "Soccer@tester.com",
      password: "123456",
    },
    {
      type: "Password Does Not Exist",
      email: "Test@tester.com",
      password: "1234567",
    },
  ].map((cred) => {
    return (
      <Button
        onClick={(e) => handleLogin(e, cred.email, cred.password)}
        key={cred.type}
        variant="secondary"
        className="m-1"
      >
        {cred.type}
      </Button>
    );
  });

  return testCases;
};

export default LoginTests;
