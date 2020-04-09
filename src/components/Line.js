import React from 'react';
import PropTypes from 'prop-types';


const Line = (props) => (
  <g className={props.name}>
    {props.vector}
    <circle cx="15" cy="40" r="1" strokeWidth="0.2" fill="black" />
  </g>
);

export default Line;

Line.propTypes = {
  name: PropTypes.string.isRequired,
  vector: PropTypes.element.isRequired,
};
