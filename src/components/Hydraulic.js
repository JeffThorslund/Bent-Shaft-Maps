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
        x={props.hydraulics.x}
        y={props.hydraulics.y}
        rx="8"
        fill="white"
        transform={
          "rotate(" +
          props.hydraulics.rotation +
          " " +
          props.hydraulics.x +
          " " +
          props.hydraulics.y +
          ")"
        }
      />
    </g>
  );
};

export default Hydraulic;

Hydraulic.propTypes = {
  hydraulics: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
