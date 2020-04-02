import React from "react";
import "./WaterLevel.css";

const WaterLevel = props => {

  const handleClick = e => {
    props.selectLevel(e.currentTarget.id);
  };

  return (
    <div id="gauge-container">
      <div id="title"> Water Level</div>

      <div id="level-container">
        <div id="high" className="level" onClick={handleClick}>
          <div className="name">High</div>
          <div className="desc">10 and above</div>
        </div>
      
        <div id="low" className="level" onClick={handleClick}>
          <div className="name">Low</div>
          <div className="desc">0 and below</div>
        </div>
      </div>
    </div>
  );
};

export default WaterLevel;
