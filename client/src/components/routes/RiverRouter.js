import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { paramCase } from 'change-case';
import SectionRouter from './SectionRouter';

const RiverRouter = ({ rivers }) => {
  const { url, path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h1>Welcome to {url}</h1>
        <h2>These are your options:</h2>
        {rivers.map((river, i) => (
          <h3 key={i}>{paramCase(river.name)}</h3>
        ))}
      </Route>
      <Route path={`${path}/:river_path`}>
        <SectionRouter rivers={rivers} />
      </Route>
    </Switch>
  );
};

export default RiverRouter;
