import React from "react";
import "./Line.css";

const Line = props => {
  return (
    <div className="Line">
      <svg
        id="svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 160 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.vector}
        <circle cx="15" cy="40" r="1" stroke-width="0.2" fill="black" />
      </svg>
    </div>
  );
};

export default Line;
