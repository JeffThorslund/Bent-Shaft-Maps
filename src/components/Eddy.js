import React from "react";
import PropTypes from "prop-types";

const Eddy = (props) => (
  <g
    className={props.eddys.name}
    onClick={() => {
      props.displayData(props.eddys.name, props.eddys.desc);
    }}
  >
    ;{props.eddys.vector}
  </g>
);

export default Eddy;

Eddy.propTypes = {
  eddys: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
