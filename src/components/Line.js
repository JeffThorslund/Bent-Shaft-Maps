import React from "react";
import PropTypes from "prop-types";

const Line = (props) => (
  <g
    className={props.lines.name}
    strokeWidth="0.4"
    onClick={() => {
      props.displayData(props.lines.name, props.lines.desc);
    }}
  >
    {props.lines.vector}
    <circle cx="15" cy="40" r="1.3" fill="black" />
  </g>
);

export default Line;

Line.propTypes = {
  lines: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
