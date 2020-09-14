import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

/** A button with multiple styles that can be used for any linking or to execute an action. */

const GeneralButton = ({ to, onClick, text, className, style, variant }) => {
  let history = useHistory();

  const handleClick = () => {
    onClick && onClick();
    to && history.push(to);
  };

  return (
    <Button className={className} onClick={() => handleClick()} style={style} variant={variant}>
      {text}
    </Button>
  );
};

GeneralButton.propTypes = {
  /** Route path navigate to via React Router Link */
  to: PropTypes.string,
  /** Function executed onClick */
  onClick: PropTypes.func,
  /** Text displayed in button */
  text: PropTypes.string.isRequired,
  /**Custom class name */
  className: PropTypes.string,
  /** Styling to be applied to the button */
  style: PropTypes.object,
};

GeneralButton.defaultProps = {
  to: null,
  onClick: null,
  text: null,
  style: null,
};

export default GeneralButton;
