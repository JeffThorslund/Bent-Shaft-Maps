import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";

import Global from "./Global";
import RiverRouter from "../RiverRouter";
import Form from "../../form/Form.js";
import ImageUpload from "../ImageUpload";
import Editing from "../../editing-interface/Editing";

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

      {process.env.NODE_ENV === "development" && (
        <Route exact path="/form" key="form">
          <Form rivers={rivers} />
        </Route>
      )}

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
