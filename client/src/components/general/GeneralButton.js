import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

/** A button with multiple styles that can be used for any linking or to execute an action. */

const GeneralButton = ({ to, onClick, text }) => {
  return (
    <Link to={to}>
      <Button onClick={onClick}>{text}</Button>
    </Link>
  );
};

GeneralButton.propTypes = {
  /** Route path navigate to via React Router Link */
  to: PropTypes.string,
  /** Function executed onClick */
  onClick: PropTypes.func,
  /** Text displayed in button */
  text: PropTypes.string.isRequired,
};

GeneralButton.defaultProps = {
  to: "",
  onClick: null,
  text: "General Button",
};

export default GeneralButton;
