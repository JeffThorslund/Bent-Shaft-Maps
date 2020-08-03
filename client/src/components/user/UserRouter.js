import React, { useState, useEffect } from "react";
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
  Redirect,
  useHistory,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import axios from "axios";

const UserRouter = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    userID: "",
    isLoggedIn: false,
  });

  const history = useHistory();

  const register = () => history.push("/register")
  const login = () => history.push("/login")

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        login()
      })
      .catch(function (error) {
        alert(error.response.data);
      });

    console.log(`Submitting Login Data for`, email);
  };

  let { path, url } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        {/* This will act as authentication home page */}
        <Route exact path={`${path}/`}>
          <Auth handleLogin={handleLogin} handleRegister={register}/>
        </Route>

        <Route path={`${path}/register`}>
          <h1>Registration Page</h1>
        </Route>

        <PrivateRoute path={`${path}/home`} isLoggedIn={isLoggedIn}>
          <UserHome credentials={credentials} />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let { path, url } = useRouteMatch();
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${path}/login`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default UserRouter;
