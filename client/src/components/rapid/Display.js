import React from "react";
import "./Display.css";
import PropTypes from "prop-types";

const Display = (props) => {
  //Destructure props
  const {
    displayPosition: { top, left, width },
    title,
    desc,
  } = props;

  //Set dimensions of display box from incoming props
  const style = {
    top: `${top}vh`,
    left: `${left}vw`,
    width: `${width}vw`,
  };

  return (
    <div className="Display" style={style}>
      <div id="title">{title}</div>
      {desc.length > 0 && <div id="desc">{desc}</div>}
    </div>
  );
};

export default Display;

Display.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  displayPosition: PropTypes.exact({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
};
