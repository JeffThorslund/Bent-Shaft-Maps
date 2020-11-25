import React from "react";
import PropTypes from "prop-types";
import DraggableNode from "../DraggableNode/index";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

//Start with dragging points around.

const mockLine =
  "M 100,370 q 140,-100 250,-60 q 150,60 380,15 q 165,-20 380,100 Q 1250,500 1350,650";

const lineData = {
  cx1: 0,
  cy1: 25,
  cx2: 50,
  cy2: 75,
};

const Line = ({ name, desc, vector, x, y }) => {
  const { cx1, cy1, cx2, cy2 } = lineData;

  return (
    <g>
      <DraggableNode color="red" initialPosition={{ x: cx1, y: cy1 }} />
      <DraggableNode color="blue" initialPosition={{ x: cx2, y: cy2 }} />
    </g>
    //<g className="line" transform={`translate(${x},${y})`}>

    // </g>
  );
};

Line.propTypes = {
  /** Name of the line*/
  name: PropTypes.string.isRequired,
  /** Description of the line. */
  desc: PropTypes.string,
  /** path vector of the line. */
  vector: PropTypes.string.isRequired,
  /** x coordinate of the line. */
  x: PropTypes.number.isRequired,
  /** y coordinate of the line. */
  y: PropTypes.number.isRequired,
};

export default Line;
