import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Line.css";

const Line = (props) => {
  const { name, desc, vector, x, y } = props.lines;

  const vectorArray = vector.split(/[\sa-zA-Z]+/).filter((elem) => elem);
  let circleX = vectorArray[0];
  let circleY = vectorArray[1];

  return (
    <g
      className="line-hover"
      transform={`translate(${x},${y})`}
    >
      <path
        d={vector}
        data-tip
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
      <circle cx={circleX} cy={circleY} r="10" stroke="none" fill="black" />
    </g>
  );
};

export default Line;

Line.propTypes = {
  lines: PropTypes.exact({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    vector: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  displayData: PropTypes.func.isRequired,
};
