import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Auth = (props) => {
  return (
    <FacebookLogin
      appId="2718766671696939"
      autoLoad={true}
      fields="name,email,picture"
      onClick={() => {
        console.log("Clicked");
      }}
      callback={props.responseFacebook}
    />
  );
};

export default Auth;
