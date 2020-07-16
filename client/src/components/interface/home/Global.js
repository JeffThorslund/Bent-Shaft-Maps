import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import GithubCorner from "react-github-corner";

import "./Global.css";

import CardDisplay from "./CardDisplay";

/**
 * Home page displays title, branding, and search interface
 * @param {array} rivers - dataset of all rivers in database
 */

const Global = ({ rivers }) => {
  return (
    <div className="Global-background">
      <div className="Global">
        <Route>
          <div className="headerWrapper">
            <img id="logo" src="./KayakLogo.png" alt="logo" />

            <div>
              <div id="title">BENT SHAFT MAPS</div>
              <div id="subtitle">WHITEWATER IMMORTALIZED</div>
            </div>
          </div>

          {rivers && <CardDisplay rivers={rivers} />}

          <GithubCorner
            octoColor="#4b8cc9"
            href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide"
          />
        </Route>
      </div>
    </div>
  );
};

export default Global;
