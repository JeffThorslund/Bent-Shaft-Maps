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
import { data, global } from "../../river-data/ottawa-river/OttawaRiverData";

//Maybe this is where we pass in the Data object of a specific river.

const GlobalRouter = () => {
  console.log("GlobalRouter is rendered");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Global data={data} />
        </Route>
        <Route path="/ottawa-river">
          <RiverRouter data={data} global={global} />
        </Route>
      </Switch>
    </Router>
  );
};

export default GlobalRouter;
