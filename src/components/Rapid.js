import React, { useState } from "react";

import Hydraulic from "./Hydraulic";
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

  for (let i = 0; i < props.hydraulics.length; i++) {
    if (
      props.level[0] <= props.hydraulics[i].range[1] &&
      props.level[1] >= props.hydraulics[i].range[0]
    ) {
      hydraulic.push(
        <Hydraulic
          level={props.level}
          desc={props.hydraulics[i].desc}
          name={props.hydraulics[i].name}
          top={props.hydraulics[i].top}
          left={props.hydraulics[i].left}
          height={props.hydraulics[i].height}
          width={props.hydraulics[i].width}
          rotation={props.hydraulics[i].rotation}
          displayData={displayData}
          key={i}
        />
      );
    }
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

      <img src={props.map} alt={props.name} id="background" />
    </div>
  );
};

export default Rapid;
