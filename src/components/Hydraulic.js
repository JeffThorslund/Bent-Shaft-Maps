import React from "react";
import "./Hydraulic.css";
import PropTypes from "prop-types";

const Hydraulic = (props) => {
  return (
    <g
      id={props.hydraulics.name}
      className="hydraulic"
      onClick={() => {
        props.displayData(props.hydraulics.name, props.hydraulics.desc);
      }}
    >
      <rect
        width={props.hydraulics.width}
        height={props.hydraulics.height}
        x={props.hydraulics.left}
        y={props.hydraulics.top}
        rx="8"
        fill="white"
        transform={
          "rotate(" +
          props.hydraulics.rotation +
          " " +
          props.hydraulics.left +
          " " +
          props.hydraulics.top +
          ")"
        }
      />
    </g>
  );
};

export default Hydraulic;

Hydraulic.propTypes = {
  level: PropTypes.number.isRequired,
  hydraulics: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
