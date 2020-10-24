import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

import Dashboard from "./dashboard/Dashboard";
import AuthInterface from "./authentication/AuthInterface";

const UserRouter = ({ rivers }) => {
  //DEFINE STATE FOR TOKEN AND USER
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //DEFINE HISTORY FUNCS AND PATH
  let history = useHistory();
  const login = () => history.push(`/user/dashboard`);
  const logout = () => history.push(`/user`);
  const { path } = useRouteMatch();

  //CHECK IF USER WAS PREVIOUSLY LOGGED IN
  useEffect(() => {
    const checkLoggedIn = async () => {
      //Get token from local storage, gets null if does not exist
      const token = localStorage.getItem("auth-token");

      token &&
        axios
          .get("/auth/verify", {
            params: {
              token: token,
            },
          })
          .then((response) => {
            setUserData({
              token: token,
              user: { name: response.data.name, email: response.data.email },
            });
            login();
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    };
    checkLoggedIn();
  }, []);

  //HANDLE LOGIN
  const handleLogin = (e, userEntry) => {
    e.preventDefault();

    const { email, password } = userEntry;
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.headers["auth-token"];
        setUserData({
          token: token,
          user: { name: response.data.name, email: response.data.email },
        });
        localStorage.setItem("auth-token", token);
        login();
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  //HANDLE LOGOUT
  const handleLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.removeItem("auth-token");
    logout();
  };

  //HANDLE REGISTER
  const handleRegister = (e, userEntry) => {
    e.preventDefault();
    const { name, email, password } = userEntry;

    axios
      .post("/auth/register", {
        email: email,
        password: password,

        name: name,
      })
      .then((response) => {
        const user = {
          email: response.data.user.email,
          password: password,
        };
        handleLogin(e, user);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        handleLogin,
        handleLogout,
        handleRegister,
      }}
    >
      <Switch>
        <Route exact path={`${path}/`}>
          <AuthInterface />
        </Route>

        <Route path={`${path}/dashboard`}>
          <Dashboard rivers={rivers} />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
};

export default UserRouter;
