import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import idParser from "../tools/idParser";
import "./PutIn.css";

import logo from "./TrestleLogo.png";

const PutIn = (props) => {
  let contributors = props.global.contributors.toString();

  return (
    <div className="PutIn-wrapper">
      <div className="header">
        <div id="pre-title">Welcome to the</div>
        <div id="title">{props.global.riverName}</div>

        <Link
          to={`${props.url}/${idParser(props.data[0].name)}`}
          className="child"
        >
          <div className="button">Click to Continue...</div>
        </Link>
      </div>

      <div className="footer">
        <div className="footer-grid-wrapper">
          <div className="child" id="info">
            <div className="title">Info</div>
            <div>{props.global.riverInfo}</div>
          </div>
          <div className="child" id="contributors">
            <div className="title">Contributors</div>
            <div>{contributors}</div>
          </div>
          <div className="child" id="logos">
            <div className="title">Brought to you by...</div>
            <a
              href="https://trestlebrewing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="trestle logo" width="100%" />
            </a>
          </div>
          <div className="child" id="access">
            <div className="title">Access</div>
            <div>{props.global.riverDesc}</div>
          </div>
          <a
            href={props.global.putIn}
            className="child access-link"
            id="putin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="title">Put In</div>
          </a>
          <a
            href={props.global.takeOut}
            className="child access-link"
            id="takeout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="title">Take Out</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PutIn;
