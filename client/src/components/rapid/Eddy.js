import React from "react";
import PropTypes from "prop-types";
import "./Eddy.css";

const Eddy = (props) => {
  const { name, desc, vector, x, y } = props.eddys;

  return (
    <g
      className="Eddy"
      transform={`translate(${x}, ${y})`}
      onClick={() => {
        props.displayData(name, desc);
      }}
    >
      <path
        id="path"
        
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
