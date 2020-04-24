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
    <div className="PutIn-wrapper">
      <Basemap map={props.global.riverMap} />
      <div id="header">Welcome to the</div>
      <div id="title">{props.global.riverName}</div>

      {/*<div id="desc">{props.global.riverDesc}</div>

      <div id="info">{props.global.riverInfo}</div>

  <div id="coords">{props.global.putInCoords}</div>*/}

      <Link to={`${props.url}/${idParser(props.data[0].name)}`}>
        <div className="button">Lets Paddle!</div>
      </Link>
    </div>
  );
};

export default PutIn;
