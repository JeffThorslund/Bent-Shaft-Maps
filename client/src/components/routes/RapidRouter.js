import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { paramCase } from 'change-case';
import Section from '../river/Section';
import Introduction from '../river/Introduction';

const RapidRouter = ({ sections, riverId }) => {
  const { url, path } = useRouteMatch();
  const { sectionPath } = useParams();

  const section = sections.find(
    (singleSection) => paramCase(singleSection.name) === sectionPath
  );

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Introduction river={section} url={url} />
        </Route>

        <Route path={`${path}/:rapid_path`}>
          <Section riverId={riverId} section={section} />
        </Route>
      </Switch>
    </div>
  );
};

export default RapidRouter;
