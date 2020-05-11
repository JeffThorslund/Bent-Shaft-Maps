import React from "react";
import PropTypes from "prop-types";

const Eddy = (props) => {
  const { name, desc, vector, x, y } = props.eddys;

  return (
    <g
      className={name}
      transform={"translate(" + x + "," + y + ")"}
      onClick={() => {
        props.displayData(name, desc);
      }}
    >
      <path
        fill="#FF5964"
        fill-opacity="0.37"
        stroke="#FF5964"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="7 7"
        d={vector}
      />
    </g>
  );
};

export default Eddy;

Eddy.propTypes = {
  eddys: PropTypes.exact({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    vector: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  displayData: PropTypes.func.isRequired,
};
