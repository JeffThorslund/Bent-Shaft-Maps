import React from "react";
import './Line.css'

function Line() {
  return (
    
        <svg id='line' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="
        M -22,37 
        q 18,5 30,0
        q 15,-5 30,2
        t 28,7
        q 10,1 20,30
      "
        stroke="black"
        stroke-width = '0.5'
      />
    </svg>
   
  );
}

export default Line;
