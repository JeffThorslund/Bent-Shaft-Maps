import React from "react";
import "../../stylesheets/Hydraulic.css";
import PropTypes from "prop-types";

const Hydraulic = (props) => {
  const { name, desc, x, y, width, height, rotation } = props.hydraulics;

  return (
    <g className="hydraulic">
      <rect
        width={width.toString()}
        height={height.toString()}
        x={x.toString()}
        y={y.toString()}
        rx="7"
        transform={`rotate( ${rotation} ${x} ${y})`}
        data-tip={
          `<div>
            <div class="name">${name}</div>
            <div class="desc">${desc}</div>
          </div>`
        }
        data-html={true}
        data-for="svgTooltip"
        data-event="click"
      />
    </g>
  );
};

export default Hydraulic;

Hydraulic.propTypes = {
  hydraulics: PropTypes.exact({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  displayData: PropTypes.func.isRequired,
};
