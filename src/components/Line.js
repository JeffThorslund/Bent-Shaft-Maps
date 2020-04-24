import React from "react";
import PropTypes from "prop-types";
import "./Line.css";

const Line = (props) => {
  //Finds starting point of vector and sets circle to that
  const vector = props.lines.vector;
  let x = "";
  let y = "";

  //Find position of circle.
  for (let i = vector.search(/M/i) + 2, count = 0; i < vector.length; i++) {
    if (/[0-9]/.test(vector[i]) && count === 0) {
      x = x.concat(vector[i]);
    } else if (/[0-9]/.test(vector[i]) && count === 1) {
      y = y.concat(vector[i]);
    } else if (count === 2) {
      break;
    } else {
      count++;
    }
  }

  return (
    <g
      onClick={() => {
        props.displayData(props.lines.name, props.lines.desc);
      }}
      className="line-hover"
      transform={"translate(" + props.lines.x + "," + props.lines.y + ")"}
    >
      <path d={props.lines.vector} />
      <circle cx={x} cy={y} r="10" stroke="none" fill="black" />
    </g>
  );
};

export default Line;

Line.propTypes = {
  lines: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
