import React from "react";
import PropTypes from "prop-types";
import "./Line.css";

const Line = (props) => {
  const { name, desc, vector, x, y } = props.lines;

  //Find position of circle.

  let circleX = "";
  let circleY = "";

  for (let i = vector.search(/M/i) + 2, count = 0; i < vector.length; i++) {
    if (/[0-9]/.test(vector[i]) && count === 0) {
      circleX = circleX.concat(vector[i]);
    } else if (/[0-9]/.test(vector[i]) && count === 1) {
      circleY = circleY.concat(vector[i]);
    } else if (count === 2) {
      break;
    } else {
      count++;
    }
  }

  return (
    <g
      onClick={() => {
        props.displayData(name, desc);
      }}
      className="line-hover"
      transform={`translate(${x},${y})`}
    >
      <path d={vector} />
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
