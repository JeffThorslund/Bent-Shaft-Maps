import React from "react";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";
import "../../stylesheets/RiverCards.css";

export const Exists = (props) => {
  return (
    <div className="river-label done">
      <Link to={`/${paramCase(props.elem.name)}`}>
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

export const DoesNotExist = () => {
  return (
    <div className="river-label make-one">
      <div className="main">This river map does not exist...yet.</div>
      <div className="sub">
        Do you have basic programming skills and you know the river? Building is
        a river map is easy as calling in sick to go paddling. Give it a shot!
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide#getting-started"
      >
        <div className="guide-link">Click here to make your mark.</div>
      </a>
    </div>
  );
};
