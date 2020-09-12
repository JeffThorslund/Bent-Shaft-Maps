import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import River from "../river/River";
import Introduction from "../river/Introduction";

export default function RiverRouter({river}) {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Introduction river={river} url={url} />
      </Route>
      <Route path={`${path}/:id`}>
        <River river={river} url={url} />
      </Route>
    </Switch>
  );
}
