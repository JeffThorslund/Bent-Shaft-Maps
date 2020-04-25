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

import "./PutIn.css";

const PutIn = (props) => {
  return (
    <>
      <Basemap map={props.global.riverMap} />

      <div className="PutIn-wrapper">
        <div id="header">Welcome to the</div>
        <div id="title">{props.global.riverName}</div>
        <Link to={`${props.url}/${idParser(props.data[0].name)}`}>
          <div className="button">Continue...</div>
        </Link>
      </div>

      <div className="bottom-wrapper">
        <div className="bottom-wrapper-child" id="desc">
          <div id="about">About</div>
          <div>{props.global.riverDesc}</div>
        </div>
        <div className="bottom-wrapper-child" id="info">
          <div id="about">Info</div>
          {props.global.riverInfo}
        </div>
      </div>
    </>
  );
};

export default PutIn;
