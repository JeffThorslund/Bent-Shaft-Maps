import React, { useState } from "react";
import PropTypes from "prop-types";

import Hydraulic from "./Hydraulic";
import Line from "./Line";
import Display from "./Display";
import NextRapid from "./NextRapid";

import "./Rapid.css";

const Rapid = props => {
  //Hold state of what is shown in display box
  const [title, setTitle] = useState("Click on Something!");
  const [description, setDescription] = useState(
    "Click on a white wave or hole too see more information."
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
  let hydraulicArray = [];

  for (let i = 0; i < props.hydraulics.length; i++) {
    if (
      props.level <= props.hydraulics[i].range[1] &&
      props.level >= props.hydraulics[i].range[0]
    ) {
      hydraulicArray.push(
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

  // render array of lines based on selected water level (App state)
  let lineArray = [];

  for (let i = 0; i < props.lines.length; i++) {
    if (
      props.level <= props.lines[i].range[1] &&
      props.level >= props.lines[i].range[0]
    ) {
      lineArray.push(<Line vector={props.lines[i].vector} key={i} />);
    }
  }

  // render array of "next rapid arrows" based on selected water level (App state)

  let arrowArray = [];

  for (let i = 0; i < props.arrows.length; i++) {
    arrowArray.push(
      <NextRapid
        rotation={props.arrows[i].rotation}
        bottom={props.arrows[i].bottom}
        right={props.arrows[i].right}
        name={props.arrows[i].name}
        selectRapid={props.selectRapid}
        key={i}
      />
    );
  }

  return (
    <div className="Rapid">
      <div id="rapid-name"> {props.name} </div>

      <div id="line-array"> {lineArray} </div>

      <div id="hydraulic-array"> {hydraulicArray} </div>

      <div id="arrow-array"> {arrowArray} </div>

      <Display title={title} description={description} />

      <img src={props.map} alt={props.name} id="background" />
    </div>
  );
};

export default Rapid;

Rapid.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  hydraulics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      desc: PropTypes.string,
      top: PropTypes.string,
      left: PropTypes.string,
      height: PropTypes.string,
      width: PropTypes.string,
      rotation: PropTypes.string,
      range: PropTypes.arrayOf(PropTypes.number)
    })
  ),
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      vector: PropTypes.element,
      range: PropTypes.arrayOf(PropTypes.number)
    })
  ),
  arrows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation: PropTypes.string,
      bottom: PropTypes.string,
      right: PropTypes.string
    })
  ),
  level: PropTypes.number,
  selectLevel: PropTypes.func,
  selectRapid: PropTypes.func
};
