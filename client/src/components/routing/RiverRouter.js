import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import River from "../river/River";
import PutIn from "../home/PutIn";

export default function RiverRouter(props) {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <PutIn data={props.data} url={url} />
      </Route>
      <Route path={`${path}/:id`}>
        <River data={props.data} url={url} />
      </Route>
    </Switch>
  );
}
