import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';


const Display = (props) => (
  <div className="Display">
    <div id="title">{props.title}</div>

    <div id="desc">{props.desc}</div>
  </div>
);

export default Display;

Display.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
