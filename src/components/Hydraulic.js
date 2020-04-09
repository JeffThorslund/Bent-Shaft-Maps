import React from 'react';
import './Hydraulic.css';
import PropTypes from 'prop-types';

const Hydraulic = (props) => {
  const style = {
    top: props.hydraulics.top,
    left: props.hydraulics.left,
    transform: props.hydraulics.rotation,
    height: props.hydraulics.height,
    width: props.hydraulics.width,
  };

  return (
    <div
      id={props.hydraulics.name}
      className="hydraulic"
      style={
        style
      }
      onClick={() => { props.displayData(props.hydraulics.name, props.hydraulics.desc); }}
    ></div>
  );
};

export default Hydraulic;

Hydraulic.propTypes = {
  level: PropTypes.number.isRequired,
  hydraulics: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
