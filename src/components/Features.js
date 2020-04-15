import React from "react";
import Line from "./Line";
import Eddy from "./Eddy";
import Hydraulic from "./Hydraulic";
import "./Features.css";
import PropTypes from "prop-types";

const Features = (props) => {
  // render array of lines based on selected water level (App state)
  const lineArray = props.data.lines.map((element, key) => {
    if (props.level <= element.range[1] && props.level >= element.range[0]) {
      return (
        <Line
          lines={element}
          displayData={props.displayData}
          key={`line${key}`}
        />
      );
    }
    return null;
  });

  // render array of eddys based on selected water level (App state)
  const eddyArray = props.data.eddys.map((element, key) => {
    if (props.level <= element.range[1] && props.level >= element.range[0]) {
      return (
        <Eddy
          eddys={element}
          displayData={props.displayData}
          key={`eddy${key}`}
        />
      );
    }
    return null;
  });

  // render array of hydraulics based on selected water level (App state)
  const hydraulicArray = props.data.hydraulics.map((element, key) => {
    if (props.level <= element.range[1] && props.level >= element.range[0]) {
      return (
        <Hydraulic
          hydraulics={element}
          displayData={props.displayData}
          key={`hydraulic${key}`}
        />
      );
    }
    return null;
  });

  return (
    <svg
      className="Features"
      id="vector-container"
      viewBox={props.data.riverMap.viewBox} //that 50 is very bad and scary
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g id="line-array" className="clickable" fill="none">
        {lineArray}
      </g>
      <g id="eddy-array" className="clickable">
        {eddyArray}
      </g>
      <g id="hydraulic-array" className="clickable">
        {hydraulicArray}
      </g>
    </svg>
  );
};

export default Features;

Features.propTypes = {
  level: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
