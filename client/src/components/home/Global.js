import React from "react";
import { Route, Link } from "react-router-dom";
import GithubCorner from "react-github-corner";

import "../../stylesheets/Global.css";

import CardDisplay from "./CardDisplay";
import GenericButton from "../atoms/GenericButton";

/**
 * Home page displays title, branding, and search interface
 * @param {array} rivers - dataset of all rivers in database
 */

const Global = ({ rivers }) => {
  return (
    <div className="Global-background">
      <Link to="/user" className="login-button">
        <GenericButton text="Log In" />
      </Link>

      <GithubCorner
        octoColor="#9bbcdb"
        direction="left"
        href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide"
      />
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
        </Route>
      </div>
    </div>
  );
};

export default Global;
