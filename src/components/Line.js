import React from "react";
import "./Line.css";

const Line = props => {
  return (
    <div className="Line">
      <svg
        height='100px'
        width='100px'
        xmlns="http://www.w3.org/2000/svg"
      >
    

        <circle cx="50" cy="50" r="50" fill="green" />

      
      </svg>

       {/*<svg
      fill="none"
      viewBox="0 0 153 50"
      preserveAspectRatio='none'
      
    >
      {props.vector}
    </svg>*/}
    </div>
  );
};

export default Line;
