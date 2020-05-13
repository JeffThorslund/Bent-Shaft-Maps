import React from "react";
import Global from "./Global";
import RiverRouter from "./RiverRouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";

const GlobalRouter = (props) => {
  //A route to each river, each containing its own data object.
  const routeArray = props.dataArr.map((data, key) => {
    return (
      <Route path={`/${paramCase(data.riverName)}`} key={`river${key}`}>
        <RiverRouter data={data} />
      </Route>
    );
  });

  return (
    <Switch>
      <Route exact path="/">
        <Global dataArr={props.dataArr} />
      </Route>

      {routeArray}
    </Switch>
  );
};

export default GlobalRouter;
