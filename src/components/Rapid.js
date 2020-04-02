import React, { useState } from "react";

import Hydraulic from "./Hydraulic";
import WaterLevel from "./WaterLevel";
import Line from "./Line";
import Display from "./Display";

import "./Rapid.css";

//Hold state of what is shown in display box
const Rapid = props => {
  const [title, setTitle] = useState("Click on Something!");
  const [description, setDescription] = useState(
    "Choose a wave, hole, line or eddy for more information!"
  );

  //set disply box state to title and desc
  const displayData = data => {
    for (let i = 0; i < props.features.length; i++) {
      if (data === props.features[i].name) {
        setTitle(props.features[i].name);
        setDescription(props.features[i].desc);
      }
    }
  };

  // render array of hydraulics based on selected water level (App state)
  let hydraulic = [];
  let base = {};

  for (let i = 0; i < props.features.length; i++) {
    if (props.level === "high") {
      base = { ...props.features[i].high };
    } else if (props.level === "low") {
      base = { ...props.features[i].low };
    } else {
      console.log("oopsie");
    }

    hydraulic.push(
      <Hydraulic
        level={props.level}
        desc={props.features[i].desc}
        name={props.features[i].name}
        top={base.top}
        left={base.left}
        height={base.height}
        width={base.width}
        rotation={base.rotation}
        displayData={displayData}
        key={i}
      />
    );
  }

  return (
    <div>
      <div id="header">
        <div id="rapid-name">{props.name}</div>
        <div id="rapid-desc">{props.desc}</div>
      </div>

      <Line />

      {hydraulic}

      <Display title={title} description={description} />

      <div id="gauge">
        <WaterLevel selectLevel={props.selectLevel} />
      </div>

      <img src={props.map} alt={props.name} id="background" />
    </div>
  );
};

export default Rapid;
