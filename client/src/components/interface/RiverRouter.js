import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import River from "../river/River";
import PutIn from "./PutIn";
import { Preload } from "react-preload";

export default function RiverRouter(props) {
  let { path, url } = useRouteMatch();

  const loadingIndicator = <div>Loading...</div>;
  const images = props.data.rapids.map((rapid) => {
    return `/api/image/${rapid.riverMap}`;
  });

  return (
    <Switch>
      <Route exact path={path}>
        <PutIn data={props.data} url={url} />
      </Route>

      <Route path={`${path}/:id`}>
        <Preload
          loadingIndicator={loadingIndicator}
          images={images}
          autoResolveDelay={10000}
          onError={() => alert("preload error")}
          onSuccess={() => console.log("preload success")}
          resolveOnError={true}
          mountChildren={true}
        >
          <River data={props.data} url={url} />
        </Preload>
      </Route>
    </Switch>
  );
}
