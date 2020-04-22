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
import Data from "../../riverdata/Data";

//Maybe this is where we pass in the Data object of a specific river.

const GlobalRouter = () => {
  console.log("GlobalRouter is rendered");
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Global />
          </Route>
          <Route path="/ottawa-river">
            <RiverRouter data={Data} />
            {/*Ottawa's Data will be passed into this*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default GlobalRouter;
