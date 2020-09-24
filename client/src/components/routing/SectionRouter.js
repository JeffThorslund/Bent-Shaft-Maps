import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import RapidRouter from "./RapidRouter";
import { paramCase } from "change-case";

const SectionRouter = ({ rivers }) => {
  let { path } = useRouteMatch();
  let { river_path } = useParams();

  let river = rivers.find((river) => paramCase(river.name) === river_path)

  return (
    <div>
      <Switch>
      <Route exact path={path}>
        <h1>Welcome to {river_path}</h1>
        <h2>These are your options:</h2>
        {river.sections.map((section, index) => {
          return <h3 key={index}>{paramCase(section.section)}</h3>;
        })}
      </Route>
      
        <Route
          path={`${path}/:section_path`}
          children={<RapidRouter sections={river.sections} />}
        />
      </Switch>
    </div>
  );
};

export default SectionRouter;
