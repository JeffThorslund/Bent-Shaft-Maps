import React from "react";
import PropTypes from "prop-types";
import SVG from "./SVG";

/**
 * Holds all interact-able elements of a rapid
 */

const Features = ({ rapid, reducers, showHandles }) => {
  return (
    <SVG
      lines={rapid.lines}
      eddys={rapid.eddys}
      reducers={reducers}
      showHandles={showHandles}
    />
  );
};

Features.propTypes = {
  /** The current water level */
  level: PropTypes.number.isRequired,
  /** The rapid data object */
  rapid: PropTypes.object.isRequired,
};

export default Features;
