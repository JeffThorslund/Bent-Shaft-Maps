import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useParams,
} from "react-router-dom";

/**
 * User Home Page
 */

const UserHome = (props) => {
  return (
    <div>
      <h1>Welcome {props.credentials.name} </h1>
      <h2>email: {props.credentials.email}</h2>
      <h2>userID: {props.credentials.userID}</h2>
    </div>
  );
};

export default UserHome;
