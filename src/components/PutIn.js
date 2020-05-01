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
import Basemap from "./Basemap";

import "./PutIn.scss";

const PutIn = (props) => {
  return (
    <div className="global-wrapper">
      <Basemap map={props.global.riverMap} />

      <div id="header child">
        <div id="pre-title">Welcome to the</div>
        <div id="title">{props.global.riverName}</div>
        <div className="button">
          <Link
            to={`${props.url}/${idParser(props.data[0].name)}`}
            className="child"
          >
            Continue...
          </Link>
        </div>
      </div>

      <div className="footer child">
        <div className="bottom-wrapper-child" id="desc">
          <div id="about">About</div>
          <div>{props.global.riverDesc}</div>
        </div>
        <div className="bottom-wrapper-child" id="desc">
          <div id="about">About</div>
          <div>{props.global.riverInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default PutIn;
