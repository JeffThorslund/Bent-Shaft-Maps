import React from "react";
import "./Line.css";

const Line = props => {


  const line = props.vector



  return (
    <div className="Line">
      <svg
        id="svg"
        fill='none'
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >

        {line}

      </svg>

      
     
    
    </div>
  );
};

export default Line;
