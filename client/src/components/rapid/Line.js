import React from "react";
import PropTypes from "prop-types";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({ name, desc, vector, x, y }) => {
  const vectorArray = vector.split(/[\sa-zA-Z]+/).filter((elem) => elem);
  let circleX = vectorArray[0];
  let circleY = vectorArray[1];

  return (
    <g className="line" transform={`translate(${x},${y})`}>
      <path
        d={vector}
        data-tip={`<div>
            <div class="name">${name}</div>
            <div class="desc">${desc}</div>
          </div>`}
        data-html={true}
        data-for="svgTooltip"
        data-event="click"
      />
      <circle cx={circleX} cy={circleY} r="10" stroke="none" fill="black" />
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
