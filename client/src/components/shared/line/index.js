import React from "react";
import PropTypes from "prop-types";
import DraggableNode from "../DraggableNode/index";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

//Start with dragging points around.

const mockLine =
  "M 100,370 q 140,-100 250,-60 q 150,60 380,15 q 165,-20 380,100 Q 1250,500 1350,650";

const Line = ({ name, desc, vector, x, y }) => {
  return (
    <g className="line" transform={`translate(${x},${y})`}>
      <DraggableNode color="red" cx={50} cy={50} />
      <DraggableNode color="blue" cx={100} cy={100} />
    </g>
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
