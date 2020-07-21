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
    picture: "",
    userId: "",
    isLoggedIn: false,
  });

  const [willRedirect, setWillRedirect] = useState(false);

  const responseFacebook = (response) => {
    setCredentials({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      userID: response.userID,
      isLoggedIn: true,
    });
    setWillRedirect(true);
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
