import React, { useState } from "react";
import Auth from "./Auth";
import UserHome from "./UserHome";
import { paramCase } from "change-case";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Redirect } from "react-router";

const UserRouter = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    userID: "",
    isLoggedIn: false,
  });

  const [willRedirect, setWillRedirect] = useState(false);

  const responseFacebook = (response) => {
    //Take authenticated user from Facebook
    //Send to server
    //Recieve JWT

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        name: response.name,
        email: response.email,
        userID: response.userID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        return fetch("/api/authorize", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${data}`,
          },
        });
      })
      .then((response) => response.json())
      .then((data) => {
        const { message, authorizedData } = data;
        alert(message);
        setCredentials({
          name: authorizedData.name,
          email: authorizedData.email,
          userID: authorizedData.userID,
          isLoggedIn: true,
        });
        setWillRedirect(true);
      });
  };

  let { path, url } = useRouteMatch();

  return (
    <>
      {willRedirect && (
        <Redirect push to={`${url}/${paramCase(credentials.name)}`} />
      )}

      <Switch>
        <Route exact path={path}>
          <Auth responseFacebook={responseFacebook} />
        </Route>
        <Route path={`${path}/:id`}>
          <UserHome credentials={credentials} />
        </Route>
      </Switch>
    </>
  );
};

export default UserRouter;
