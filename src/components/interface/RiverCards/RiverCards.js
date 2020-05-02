import React, { useState } from "react";
import idParser from "../../../tools/idParser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./RiverCards.css";
import Construction from "./ConstructionBar.png";

export const Exists = (props) => {
  return (
    <div className="river-label done">
      <Link to={`/${idParser(props.elem.name)}`}>
        <div
          id="name"
          dangerouslySetInnerHTML={{ __html: props.nameResult }}
        ></div>
        <div
          id="location"
          dangerouslySetInnerHTML={{ __html: props.locationResult }}
        ></div>
        <div id="class">Class {props.elem.class}</div>
      </Link>
    </div>
  );
};

export const UnderConst = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {!toggle ? (
        <div className="river-label const" onClick={() => setToggle(!toggle)}>
          <div className="header">
            <div
              id="name"
              dangerouslySetInnerHTML={{ __html: props.nameResult }}
            ></div>
            <div
              id="location"
              dangerouslySetInnerHTML={{ __html: props.locationResult }}
            ></div>
            <div id="class">Class {props.elem.class}</div>
          </div>
          {/*<div className="img-wrapper">
            <img src={Construction} alt="Construction" id="caution" />
      </div>*/}
        </div>
      ) : (
        <div
          className="river-label const toggled"
          onClick={() => setToggle(!toggle)}
        >
          <div className="header">
            <div id="name"> Under Construction </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide#getting-started"
            >
              <div id="involved">Get Involved</div>
            </a>
          </div>
          {/*<div className="img-wrapper">
            <img src={Construction} alt="Construction" id="caution" />
      </div>*/}
        </div>
      )}
    </>
  );
};

export const DoesNotExist = () => {
  return (
    <div className="river-label make-one">
      <div className="main">This river does not exist...yet.</div>
      <div className="sub">
        Creating a river is easier than you think. If you have basic programming
        skills, and you know the river, you will be able to do it in 5 to 6
        hours. This guide walks you through every step of the process.
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide#getting-started"
      >
        <div className="guide-link">Click here to make your mark!</div>
      </a>
    </div>
  );
};
