import React from "react";
import { Switch, Route } from "react-router-dom";
import { paramCase } from "change-case";

import Global from "../home/Global";
import RiverRouter from "./RiverRouter";
import ImageUpload from "../home/ImageUpload";
import Editing from "../user/editing-interface/Editing";
import UserRouter from "../user/UserRouter";
import PrivacyPolicy from "../user/PrivacyPolicy";

/**
 * Router that creates all possible routes
 * www.bentshaftmaps.com/<path>
 * @param {array} rivers - dataset of all rivers in database
 */

const GlobalRouter = ({ rivers }) => {
  // Create a route for each river
  let routeArray = rivers
    ? rivers.map((river) => {
        return (
          <Route path={`/${paramCase(river.name)}`} key={`river${river.id}`}>
            <RiverRouter data={river} />
          </Route>
        );
      })
    : [];

  return (
    <Switch>
      <Route exact path="/user-edit" key="user-edit">
        <Editing />
      </Route>

      <Route exact path="/" key="home">
        <Global rivers={rivers} />
      </Route>

      <Route path="/user" key="user">
        <UserRouter />
      </Route>

      <Route path="/privacy-policy" key="privacy-policy">
        <PrivacyPolicy />
      </Route>

      {process.env.NODE_ENV === "development" && (
        <Route exact path="/imageUpload" key="imageUpload">
          <ImageUpload />
        </Route>
      )}
      {routeArray}
    </Switch>
  );
};

export default GlobalRouter;
