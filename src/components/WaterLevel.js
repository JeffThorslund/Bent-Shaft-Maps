import React from "react";
import "./WaterLevel.css";

const WaterLevel = props => {

  const handleClick = e => {
    props.selectLevel(e.currentTarget.id);
  };

  const increment = 6 //Change this to change what guage increments
  const range = [0, 20] //Indicates minimum and maximum yearly river levels

  let levelMarker = []

  for (let i=range[0]; i<range[1]; i += increment){
    levelMarker.push(
      <div id={[i,i+increment]} className="level" onClick={handleClick}>  
          <div className="desc">{i}ft to {i+increment}ft</div>
        </div>
    )
  }

  return (
    <div id="gauge-container">
      <div id="title"> Water Level</div>
      <div id="subtitle"> Owl Gauge</div>

      <div id="level-container">
        
      {levelMarker}
        
      </div>
    </div>
  );
};

export default WaterLevel;
