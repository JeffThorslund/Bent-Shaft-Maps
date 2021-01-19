import React, { useContext } from 'react';

import UserContext from '../UserContext';

const LoginTests = () => {
  const { handleLogin } = useContext(UserContext);
  // Test Cases
  const testCases = [
    {
      type: 'Valid Login',
      email: 'Test@tester.com',
      password: '123456',
    },
    {
      type: 'Invalid Email',
      email: 'Testtester.com',
      password: '123456',
    },
    {
      type: 'Invalid Password',
      email: 'Test@tester.com',
      password: '12345',
    },
    {
      type: 'Email Does Not Exist',
      email: 'Soccer@tester.com',
      password: '123456',
    },
    {
      type: 'Password Does Not Exist',
      email: 'Test@tester.com',
      password: '1234567',
    },
  ].map((cred) => (
    <button
      className="btn btn-secondary m-1"
      type="button"
      onClick={() =>
        handleLogin({ email: cred.email, password: cred.password })
      }
      key={cred.type}
    >
      {cred.type}
    </button>
  ));

  return (
    <>
      <h2 className="mt-3">Test Cases</h2>
      {testCases}
    </>
  );
};

export default LoginTests;
