import React from "react";
import PropTypes from "prop-types";

const Eddy = (props) => {
  return (
    <g
      className={props.eddys.name}
      transform={"translate(" + props.eddys.x + "," + props.eddys.y + ")"}
      onClick={() => {
        props.displayData(props.eddys.name, props.eddys.desc);
      }}
    >
      <path
        fill="#FF5964"
        fill-opacity="0.37"
        stroke="#FF5964"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="7 7"
        d={props.eddys.vector}
      />

      {props.eddys.vector}
    </g>
  );
};

export default Eddy;

Eddy.propTypes = {
  eddys: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
