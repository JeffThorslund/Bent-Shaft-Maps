import React from "react";
import "./Global.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Global = () => {
  return (
    <div className="Global">
      <Route>
        <div id="title"> Wet Exit Guides </div>
        <div id="subtitle"> Your source for detailed whitewater maps. </div>
        <div id="prompt"> Choose your river! </div>
        <div className="river-wrapper">
          <div className="river-label">
            <Link to="/ottawa-river/mccoys-chute-rapid">Ottawa River</Link>
          </div>
          <div className="river-label">
            <Link to="/gatineau-river">Gatineau River</Link>
          </div>
          <div className="river-label">
            <Link to="/gauley-river">Gauley River</Link>
          </div>
        </div>
      </Route>
    </div>
  );
};

export default Global;
