import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import Auth from "./Auth";
import UserHome from "./UserHome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import axios from "axios";

const UserRouter = () => {
  //User Data and JWT
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  //Define history 
  let history = useHistory();
  let { path } = useRouteMatch();

  //Check to see if user was previously logged in
  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("auth-token");
      axios
        .get("/auth/verify", {
          params: {
            token: token,
          },
        })
        .then(function (response) {
          setUserData({
            token: token,
            user: { name: response.data.name, email: response.data.email },
          });
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    };
    checkLoggedIn();
  }, []);

  

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("auth-token", response.headers["auth-token"]);
        history.push(`user/home`)
      })
      .catch(function (error) {
        alert(error.response.data);
      });

      
    console.log(`Submitting Login Data for`, email);
  };

  return (
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path={`${path}/`}>
            <Auth handleLogin={handleLogin} />
          </Route>

          <Route path={`${path}/register`}>
            <h1>Registration Page</h1>
          </Route>

          <Route path={`${path}/home`}>
            <UserHome />
          </Route>
        </Switch>
      </UserContext.Provider>
  );
};

export default UserRouter;
