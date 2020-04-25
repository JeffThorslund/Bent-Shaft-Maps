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
import PutIn from "../PutIn";

const RiverRouter = (props) => {
  let { path, url } = useRouteMatch();
  console.log("River Router", path, url);

  return (
    <Router>
      <Switch>
        <Route exact path={path}>
          <PutIn global={props.global} data={props.data} url={url} />
        </Route>

        <Route path={`${path}/:id`}>
          <River data={props.data} url={url} />
        </Route>
      </Switch>
    </Router>
  );
};

export default RiverRouter;
