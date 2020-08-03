import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = ({ handleLogin, handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const testCaseCreds = [
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
      <div key={cred.type}>
        <h3>{cred.type}</h3>
        <div>email: {cred.email}</div>
        <div>password: {cred.password}</div>
        <button onClick={(e) => handleLogin(e, cred.email, cred.password)}>
          Test {cred.type}
        </button>
      </div>
    );
  });

  return (
    <>
      <form onSubmit={(e) => handleLogin(e, email, password)}>
        <h1>Log In</h1>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <input type="button" value="Register" onClick={handleRegister} />

      <h2>Test Cases</h2>
      {testCaseCreds}
    </>
  );
};

export default LoginForm;
