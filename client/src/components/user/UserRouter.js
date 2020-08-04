import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
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
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

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

  let { path, url } = useRouteMatch();

  //Broken...why?
  // const history = useHistory();
  // const register = () => history.push(`user/register`);
  // const login = () => history.push(`${path}/home`);

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
        localStorage.setItem("auth-token", response.headers["auth-token"]);
        //login();
      })
      .catch(function (error) {
        alert(error.response.data);
      });

    console.log(`Submitting Login Data for`, email);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          {/* This will act as authentication home page */}
          <Route exact path={`${path}/`}>
            <Auth handleLogin={handleLogin} /*handleRegister={register}*/ />
          </Route>

          <Route path={`${path}/register`}>
            <h1>Registration Page</h1>
          </Route>

          <Route path={`${path}/home`} isLoggedIn={isLoggedIn}>
            <UserHome />
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default UserRouter;
