import React, { useRef, useEffect } from "react";
import Line from "./Line";
import Eddy from "./Eddy";
import Hydraulic from "./Hydraulic";
import Symbol from "./Symbol";
import "./Features.css";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import Popover from "./Popover";

const Features = (props) => {
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      ReactTooltip.rebuild();
    }
  });

  const lineArray = props.data.lines
    .filter(
      (element) =>
        props.level <= element.range[1] && props.level >= element.range[0]
    )
    .map((element, key) => {
      return <Line lines={element} key={`line${key}`} />;
    });

  // render array of eddys based on selected water level
  const eddyArray = props.data.eddys
    .filter(
      (element) =>
        props.level <= element.range[1] && props.level >= element.range[0]
    )
    .map((element, key) => {
      return <Eddy eddys={element} key={`eddy${key}`} />;
    });

  // render array of hydraulics based on selected water level
  const hydraulicArray = props.data.hydraulics
    .filter(
      (element) =>
        props.level <= element.range[1] && props.level >= element.range[0]
    )
    .map((element, key) => {
      return (
        <Hydraulic
          hydraulics={element}
          key={`hydraulic${key}`}
        />
      );
    });

  // render array of symbols, except caution, based on selected water level
  const symbolArray = props.data.symbols
    .filter((element) => element.type !== "Caution")
    .map((element, key) => {
      return (
        <Symbol
          symbols={element}
          key={`symbol${key}`}
        />
      );
    });

  // render caution if there are no possible lines
  /*const cautionSymbol = props.data.symbols
    .filter((element) => element.type === "Caution")
    .map((element, key) => {
      return (
        <Caution
          symbols={element}
          key={`caution${key}`}
        />
      );
    });*/

  // render array of lines based on selected water level

  return (
    <>
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
        {/*<g className="clickable">{lineArray.length === 0 && cautionSymbol}</g>*/}
        <g id="symbol-array" className="clickable">
          {symbolArray}
        </g>
      </svg>
      <Popover />
    </>
  );
};

export default Features;

Features.propTypes = {
  level: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};
