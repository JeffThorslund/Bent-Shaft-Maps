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
  let { id } = useParams();
  return <div>hello {id}</div>;
};

export default UserHome;
