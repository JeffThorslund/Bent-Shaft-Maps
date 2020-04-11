import React from "react";
import BaseHydraulic from "./VectorAssets/Elements/BaseHydraulic";
import "./Hydraulic.css";
import PropTypes from "prop-types";

const Hydraulic = (props) => {
  

  const style = {
    top: props.hydraulics.top,
    left: props.hydraulics.left,
    transform: props.hydraulics.rotation,
    height: props.hydraulics.height,
    width: props.hydraulics.width,
  };

  return (
    <g
      id={props.hydraulics.name}
      className="hydraulic"
      
      onClick={() => {
        props.displayData(props.hydraulics.name, props.hydraulics.desc);
      }}
    >
      <rect
        x="0.734436"
        y="0.706421"
        style={style}
        rx="20"
        fill="black"
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
