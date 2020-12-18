import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SectionRouter from "./SectionRouter";
import { paramCase } from "change-case";

const RiverRouter = ({ rivers }) => {
  let { url, path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h1>Welcome to {url}</h1>
        <h2>These are your options:</h2>
        {rivers.map((river, i) => {
          return <h3 key={i}>{paramCase(river.name)}</h3>;
        })}
      </Route>
      <Route
        path={`${path}/:river_path`}
        children={<SectionRouter rivers={rivers} />}
      />
    </Switch>
  );
};

export default RiverRouter;
