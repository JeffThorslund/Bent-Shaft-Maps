import React from "react";
import "./GenericToggle.css";
import PropTypes from "prop-types";

const GenericToggle = (props) => {
  const falseStyles = {
    wrapper: "false-wrapper wrapper",
    dot: "false-dot dot",
    text: "false-text text",
  };

  const trueStyles = {
    wrapper: "true-wrapper wrapper",
    dot: "true-dot dot",
    text: "true-text text",
  };

  let currentStyle = props.toggle ? trueStyles : falseStyles;

  return (
    <div
      className="GenericToggle noselect"
      onClick={() => {
        props.toggleSetting(props.setting);
      }}
    >
      <div className={currentStyle.wrapper}>
        <span className={currentStyle.dot} />
        {!props.toggle && <div className={falseStyles.text}>{props.false}</div>}
        {props.toggle && <div className={trueStyles.text}>{props.true}</div>}
      </div>
    </div>
  );
};

export default GenericToggle;

GenericToggle.propTypes = {
  toggle: PropTypes.bool,
  toggleSetting: PropTypes.func,
  setting: PropTypes.string,
};
