import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { paramCase } from 'change-case';
import RapidRouter from './RapidRouter';

const SectionRouter = ({ rivers }) => {
  const { path } = useRouteMatch();
  const { river_path } = useParams();

  const river = rivers.find((river) => paramCase(river.name) === river_path);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h1>Welcome to {river_path}</h1>
          <h2>These are your options:</h2>
          {river.sections.map((section, index) => (
            <h3 key={index}>{paramCase(section.name)}</h3>
          ))}
        </Route>

        <Route
          path={`${path}/:section_path`}
          children={
            <RapidRouter riverId={river.id} sections={river.sections} />
          }
        />
      </Switch>
    </div>
  );
};

export default SectionRouter;
