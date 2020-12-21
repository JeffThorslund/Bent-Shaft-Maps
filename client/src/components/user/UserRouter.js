import React, { useState, useEffect, useCallback } from "react";
import UserContext from "./UserContext";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

import Dashboard from "./dashboard/Dashboard";
import AuthInterface from "./authentication/AuthInterface";

const UserRouter = () => {
  //DEFINE STATE FOR TOKEN AND USER
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //DEFINE HISTORY FUNCS AND PATH
  let history = useHistory();
  const login = useCallback(() => history.push(`/user/dashboard`), [history]);
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
  }, [login]);

  //HANDLE LOGIN
  const handleLogin = (userEntry) => {
    axios
      .post("/auth/login", userEntry)
      .then((response) => {
        const token = response.headers["auth-token"];
        const { name, email } = response.data;
        setUserData({
          token: token,
          user: { name: name, email: email },
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
  const handleRegister = (userEntry) => {
    axios
      .post("/auth/register", { userEntry })
      .then((response) => {
        const user = {
          email: response.data.user.email,
          password: response.data.user.password,
        };
        handleLogin(user);
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
          <Dashboard />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
};

export default UserRouter;
