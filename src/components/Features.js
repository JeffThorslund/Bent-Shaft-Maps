import React from "react";
import Line from "./Line";
import Eddy from "./Eddy";
import Hydraulic from "./Hydraulic";
import Caution from "./Symbols/Caution";
import Symbols from "./Symbols/Symbols";
import "./Features.css";
import PropTypes from "prop-types";

const Features = (props) => {
  // render array of lines based on selected water level (App state)
  const lineArray = props.data.lines
    .filter(
      (element) =>
        props.level <= element.range[1] && props.level >= element.range[0]
    )
    .map((element, key) => {
      return (
        <Line
          lines={element}
          displayData={props.displayData}
          key={`line${key}`}
        />
      );
    });

  // render array of eddys based on selected water level (App state)
  const eddyArray = props.data.eddys
    .filter(
      (element) =>
        props.level <= element.range[1] && props.level >= element.range[0]
    )
    .map((element, key) => {
      return (
        <Eddy
          eddys={element}
          displayData={props.displayData}
          key={`eddy${key}`}
        />
      );
    });

  // render array of hydraulics based on selected water level (App state)
  const hydraulicArray = props.data.hydraulics
    .filter(
      (element) =>
        props.level <= element.range[1] && props.level >= element.range[0]
    )
    .map((element, key) => {
      return (
        <Hydraulic
          hydraulics={element}
          displayData={props.displayData}
          key={`hydraulic${key}`}
        />
      );
    });

  // render caution if there are no possible lines
  const cautionSymbol = props.data.symbols
    .filter((sym) => sym.type === "Caution")
    .map((sym, key) => {
      return (
        <Caution
          symbols={sym}
          key={`symbol${key}`}
          displayData={props.displayData}
        />
      );
    });

  return (
    <svg
      className="Features"
      id="vector-container"
      viewBox={props.data.riverMap.viewBox}
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

      <g className="clickable">{lineArray.length === 0 && cautionSymbol}</g>

      <g id="symbol-array" className="clickable">
        {!props.symbolBool && (
          <Symbols data={props.data} displayData={props.displayData} />
        )}
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
