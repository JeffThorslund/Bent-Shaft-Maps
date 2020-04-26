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

import {
  data as ottawaRiverData,
  global as ottawaRiverGlobal,
} from "../../river-data/ottawa-river/OttawaRiverData";

//import {data as [myRiverData], global as [myRiverGlobal]} from "../../river-data/my-river-template/TemplateRiverData";

const GlobalRouter = () => {
  console.log("GlobalRouter is rendered");
  return (
    <Switch>
      <Route exact path="/">
        <Global />
      </Route>
      <Route path="/ottawa-river">
        <RiverRouter data={ottawaRiverData} global={ottawaRiverGlobal} />
      </Route>

      {/*
      <Route path="/my-river">
        <RiverRouter data={myRiverData} global={myRiverGlobal} />
      </Route>
      */}
    </Switch>
  );
};

export default GlobalRouter;
