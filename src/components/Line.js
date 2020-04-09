import React from 'react';
import './Line.css';
import PropTypes from 'prop-types';


const Line = (props) => (
  <div className="Line">
    <svg
      id="svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 160 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.vector}
      <circle cx="15" cy="40" r="1" strokeWidth="0.2" fill="black" />
    </svg>
  </div>
);

export default Line;

Line.propTypes = {
  vector: PropTypes.element,
};
