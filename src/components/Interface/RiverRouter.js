import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import River from "../River";

const RiverRouter = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={path}>
            <River data={props.data} url={url} passed="home" />
          </Route>

          <Route
            path={`${path}/:id`}
            children={
              <River data={props.data} url={url} passed="with ending" />
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

export default RiverRouter;
