import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import Line from "../shared/Line";
import Eddy from "./Eddy";
import Hydraulic from "./Hydraulic";
import Symbol from "./Symbol";
import Popover from "./Popover";
import filterRange from "../../tools/filterRange";

/**
 * Holds all interact-able elements of a rapid
 */

const Features = ({ level, rapid }) => {
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      ReactTooltip.rebuild();
    }
  });

  const lineArray = rapid.lines
    .filter((line) => filterRange(level, line.range))
    .map((line, key) => (
      <Line
        name={line.name}
        desc={line.desc}
        pathCommands={line.vector}
        x={line.x}
        y={line.y}
        key={`line${key}`}
        showNodes={true}
      />
    ));

  const eddyArray = rapid.eddys
    .filter((eddy) => filterRange(level, eddy.range))
    .map((eddy, key) => (
      <Eddy
        name={eddy.name}
        desc={eddy.desc}
        vector={eddy.vector}
        x={eddy.x}
        y={eddy.y}
        key={`eddy${key}`}
      />
    ));

  const hydraulicArray = rapid.hydraulics
    .filter((hydraulic) => filterRange(level, hydraulic.range))
    .map((hydraulic, key) => (
      <Hydraulic
        name={hydraulic.name}
        desc={hydraulic.desc}
        x={hydraulic.x}
        y={hydraulic.y}
        width={hydraulic.width}
        height={hydraulic.height}
        rotation={hydraulic.rotation}
        key={`hydraulic${key}`}
      />
    ));

  // render array of symbols, except caution, based on selected water level
  const symbolArray = rapid.symbols
    .filter((symbol) => symbol.type !== "Caution")
    .map((symbol, key) => {
      return (
        <Symbol
          type={symbol.type}
          desc={symbol.desc}
          top={symbol.top}
          left={symbol.left}
          key={`symbol${key}`}
        />
      );
    });

  // render array of lines based on selected water level
  return (
    <>
      <svg
        className="Features"
        id="vector-container"
        viewBox="0 0 100 100"
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
        <g id="symbol-array" className="clickable">
          {symbolArray}
        </g>
      </svg>
      <Popover />
    </>
  );
};

Features.propTypes = {
  /** The current water level */
  level: PropTypes.number.isRequired,
  /** The rapid data object */
  rapid: PropTypes.object.isRequired,
};

export default Features;
