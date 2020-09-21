import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import River from "../river/Section";
import Introduction from "../river/Introduction";
import { paramCase } from "change-case";

const RapidRouter = ({ sections }) => {
  let { url, path } = useRouteMatch();
  let { section_path } = useParams();

  let section = sections.find(
    (section) => paramCase(section.section) === section_path
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
          children={<River section={section} url={url} />}
        />
      </Switch>
    </div>
  );
};

export default RapidRouter;
