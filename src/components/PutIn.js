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
import Rachel from "../river-data/ottawa-river/Rachel-Ottawa.jpg";

import "./PutIn.css";

const PutIn = (props) => {
  return (
    <div className="global-wrapper">
      <Basemap map={props.global.riverMap} />

      <div className="header">
        <div id="pre-title">Welcome to the</div>
        <div id="title">{props.global.riverName}</div>

        <Link
          to={`${props.url}/${idParser(props.data[0].name)}`}
          className="child"
        >
          <div className="button">Let's Paddle!</div>
        </Link>
      </div>

      <div className="footer">
        <div className="child" id="info">
          <div className="title">Info</div>
          <div>{props.global.riverInfo}</div>
        </div>
        <div className="child" id="desc">
          <div className="title">Description</div>
          <div>{props.global.riverDesc}</div>
        </div>
        <div className="child" id="about">
          Sponsored Logos Here
        </div>
        <div className="child" id="access">
          <div className="title">Access</div>
          <div>{props.global.riverInfo}</div>
        </div>
        <div className="child" id="putin">
          <div className="title">Put In</div>
          <div></div>
        </div>
        <div className="child" id="takeout">
          <div className="title">Take Out</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PutIn;
