import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Global = () => {
  console.log("Global.js is rendered");

  return (
    <Route>
      Global.js
      <ul>
        <li>
          <Link to="/ottawa-river">ottawa-river</Link>
        </li>
        <li>
          <Link to="/gatineau-river">gatineau-rive</Link>
        </li>
        <li>
          <Link to="/gauley-river">gauley-river</Link>
        </li>
      </ul>
    </Route>
  );
};

export default Global;
