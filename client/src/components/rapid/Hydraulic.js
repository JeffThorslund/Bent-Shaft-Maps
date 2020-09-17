import React from "react";
import PropTypes from "prop-types";

/**
 * A single hydraulic in the river.
 * This could be a hole, wave, waterfall or ledge
 */

const Hydraulic = ({ name, desc, x, y, width, height, rotation }) => (
  <g className="hydraulic">
    <rect
      width={width.toString()}
      height={height.toString()}
      x={x.toString()}
      y={y.toString()}
      rx="7"
      transform={`rotate( ${rotation} ${x} ${y})`}
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

Hydraulic.propTypes = {
  /** Name of the hydraulic */
  name: PropTypes.string.isRequired,
  /** Description of the hydraulic */
  desc: PropTypes.string.isRequired,
  /** x position of the hydraulic */
  x: PropTypes.number.isRequired,
  /** y position of the hydraulic */
  y: PropTypes.number.isRequired,
  /** width of the hydraulic (measured in the upstream to downstream axis) */
  width: PropTypes.number.isRequired,
  /** height of the hydraulic (measured in the river-left to river-right axis) */
  height: PropTypes.number.isRequired,
  /** The rotation of the hydraulic */
  rotation: PropTypes.number.isRequired,
};

export default Hydraulic;
