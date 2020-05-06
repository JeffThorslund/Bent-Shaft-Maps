import React from "react";
import "./Display.css";
import PropTypes from "prop-types";

const Display = (props) => {
  const style = {
    top: props.displayPosition.top,
    left: props.displayPosition.left,
    width: props.displayPosition.width,
  };

  return (
    <div className="Display" style={style}>
      <div id="title">{props.title}</div>
      {props.desc.length > 0 && <div id="desc">{props.desc}</div>}
    </div>
  );
};

export default Display;

Display.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  displayPosition: PropTypes.object.isRequired,
};
