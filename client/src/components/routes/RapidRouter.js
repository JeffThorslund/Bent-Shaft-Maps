import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { paramCase } from 'change-case';
import Section from '../river/Section';
import Introduction from '../river/Introduction';

const RapidRouter = ({ sections, riverId }) => {
  const { url, path } = useRouteMatch();
  const { section_path } = useParams();

  const section = sections.find(
    (section) => paramCase(section.name) === section_path
  );

  return (
    <div>
      <Switch>
        <Route
          exact
          path={path}
          children={<Introduction river={section} url={url} />}
        />
        <Route
          path={`${path}/:rapid_path`}
          children={<Section riverId={riverId} section={section} />}
        />
      </Switch>
    </div>
  );
};

export default RapidRouter;
