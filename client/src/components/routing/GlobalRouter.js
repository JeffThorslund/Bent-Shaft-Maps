import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../home/Home";
import RiverRouter from "./RiverRouter";
import ImageUpload from "../home/ImageUpload";
import UserRouter from "../user/UserRouter";
import PrivacyPolicy from "../user/PrivacyPolicy";

/**
 * Creates all routes of base url.
 * Shows <Home /> by default.
 * Creates user login route, privacy policy route, and image upload interface route.
 * Creates route with variable url for differentiation at the river level.
 */

const GlobalRouter = ({ rivers }) => {
  console.log(rivers)
  return (
    <Switch>
      <Route exact path="/" key="home">
        <Home rivers={rivers} />
      </Route>

      {rivers && (
        <Route path="/user" key="user">
          <UserRouter rivers={rivers} />
        </Route>
      )}

      <Route path="/privacy-policy" key="privacy-policy">
        <PrivacyPolicy />
      </Route>

      {process.env.NODE_ENV === "development" && (
        <Route exact path="/imageUpload" key="imageUpload">
          <ImageUpload />
        </Route>
      )}

      {rivers ? (
        <Route path="/maps" children={<RiverRouter rivers={rivers} />} />
      ) : null}
    </Switch>
  );
};

export default GlobalRouter;
