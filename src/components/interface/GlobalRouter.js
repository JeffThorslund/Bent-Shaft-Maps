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

import RiverList from "../../river-data/RiverList";
import idParser from "../../tools/idParser";
import readRiverFilesRequest from "../../tools/serverless/readRiverFilesRequest";
import ottawaRiver from "../../river-data/ottawa-river/temp_data.json";

const GlobalRouter = () => {
  const riverList = [ottawaRiver];

  const routeArray = riverList.map((elem, key) => {
    return (
      <Route path={`/${idParser(elem.riverName)}`} key={`river${key}`}>
        <RiverRouter data={elem} />
      </Route>
    );
  });

  //readRiverFilesRequest("./src/river-data");

  return (
    <Switch>
      <Route exact path="/">
        <Global />
      </Route>

      {routeArray}
    </Switch>
  );
};

export default GlobalRouter;
