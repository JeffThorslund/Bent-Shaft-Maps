import React, { useState } from "react";

import Hydraulic from "./Hydraulic";
import WaterLevel from "./WaterLevel";
import Line from "./Line";
import Display from "./Display";

import "./Rapid.css";


const Rapid = props => {

  //Hold state of what is shown in display box
  const [title, setTitle] = useState("Click on Something!");
  const [description, setDescription] = useState(
    "Choose a wave, hole, line or eddy for more information!"
  );

  //set disply box state to title and desc
  const displayData = data => {
    for (let i = 0; i < props.hydraulics.length; i++) {
      if (data === props.hydraulics[i].name) {
        setTitle(props.hydraulics[i].name);
        setDescription(props.hydraulics[i].desc);
      }
    }
  };

  // render array of hydraulics based on selected water level (App state)
  let hydraulic = [];
  let base = {};

  for (let i = 0; i < props.hydraulics.length; i++) {
    if (props.level === "high") {
      base = { ...props.hydraulics[i].high };
    } else if (props.level === "low") {
      base = { ...props.hydraulics[i].low };
    } else {
      console.log("oopsie");
    }

    hydraulic.push(
      <Hydraulic
        level={props.level}
        desc={props.hydraulics[i].desc}
        name={props.hydraulics[i].name}
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

  //Add a function that creates an array based on the range that it is in. 



  return (
    <div>
      <div id="header">
        <div id="rapid-name">{props.name}</div>
        <div id="rapid-desc">{props.desc}</div>
      </div>

      <Line/>

      {hydraulic}

      <Display title={title} description={description} />

      

      <img src={props.map} alt={props.name} id="background" />
    </div>
  );
};

export default Rapid;
