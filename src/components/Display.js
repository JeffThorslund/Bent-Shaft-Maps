import React from "react";
import "./Display.css";

const Display = props => {
  return (
    <div className="Display">
      <div id="title">{props.title}</div>

      <div id="desc">{props.description}</div>
    </div>
  );
};

export default Display;
