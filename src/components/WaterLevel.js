import React from "react";
import "./WaterLevel.css";

const WaterLevel = props => {
  const handleClick = e => {
    let x = Number(e.currentTarget.id);
    let newLevel = [x, x + increment];
    props.selectLevel(newLevel);
  };

  const increment = 3; //Change this to change what guage increments
  const range = [-2, 13]; //Indicates minimum and maximum yearly river levels

  let levelMarker = [];

  for (let i = range[0]; i < range[1]; i += increment) {
    levelMarker.push(
      <div id={i} className="level" onClick={handleClick} key={i}>
        <div className="desc">
          {i}ft to {i + increment}ft
        </div>
      </div>
    );
  }

  return (
    <div id="gauge-container">
      <div id="title"> Water Level</div>
      <div id="subtitle"> Owl Gauge</div>

      <div id="level-container">{levelMarker}</div>
    </div>
  );
};

export default WaterLevel;
