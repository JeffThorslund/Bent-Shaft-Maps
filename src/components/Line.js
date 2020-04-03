import React from "react";
import "./Line.css";

const Line = props => {

  let line =  <svg
      id="line"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >

      {props.vector}
      
    </svg>




  return (
<div> </div>
    
  )
  
};

export default Line;
