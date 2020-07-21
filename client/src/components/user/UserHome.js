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
  return <div>hello {props.credentials.name}</div>;
};

export default UserHome;
