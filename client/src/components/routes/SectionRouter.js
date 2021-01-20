import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { paramCase } from 'change-case';
import RapidRouter from './RapidRouter';

const SectionRouter = ({ rivers }) => {
  const { path } = useRouteMatch();
  const riverPath = useParams().river_path;

  const river = rivers.find(
    (singleRiver) => paramCase(singleRiver.name) === riverPath
  );

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h1>Welcome to {riverPath}</h1>
          <h2>These are your options:</h2>
          {river.sections.map((section, index) => (
            <h3 key={index}>{paramCase(section.name)}</h3>
          ))}
        </Route>

        <Route path={`${path}/:section_path`}>
          <RapidRouter riverId={river.id} sections={river.sections} />
        </Route>
      </Switch>
    </div>
  );
};

export default SectionRouter;
