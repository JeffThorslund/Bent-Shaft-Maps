import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Auth = (props) => {
  return (
    <div>
      <h1>Choose a Login Method</h1>
      <FacebookLogin
        appId="2718766671696939"
        autoLoad={true}
        fields="name,email,picture"
        onClick={() => {
         return null
        }}
        callback={props.responseFacebook}
      />
    </div>
  );
};

export default Auth;
