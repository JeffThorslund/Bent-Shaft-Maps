import React from "react";
import PropTypes from "prop-types";

/** Data for a single eddy */

const Eddy = ({ name, desc, vector, x, y }) => (
  <g className="eddy" transform={`translate(${x}, ${y})`}>
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
  </g>
);

Eddy.propTypes = {
  /** Name of eddy */
  name: PropTypes.string.isRequired,
  /** Description of eddy */
  desc: PropTypes.string.isRequired,
  /** Vector path of eddy */
  vector: PropTypes.string.isRequired,
  /** X placement of eddy */
  x: PropTypes.number.isRequired,
  /** Y position of eddy */
  y: PropTypes.number.isRequired,
};

export default Eddy;
