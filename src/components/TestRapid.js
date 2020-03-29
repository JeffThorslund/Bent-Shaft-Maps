import React from "react";
import './TestRapid.css';
import Rapid from "./McCoys.png";

export default function TestRapid() {
  return (
    <div>
        
    <img src={Rapid} alt="a test rapid" id='background'/>

    <div id='line-container'> 
        <div className = 'line' id='one'> 
        Line 1
    </div>

    <div className = 'line' id='two'> 
        Line 2
    </div>
    </div>

    

    
      
    </div>
  );
}
