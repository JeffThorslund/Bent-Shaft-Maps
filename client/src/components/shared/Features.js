import React from "react";
import PropTypes from "prop-types";
import SVG from "./SVG";

/**
 * Holds all interact-able elements of a rapid
 */

const Features = ({ rapid, reducers, areHandlesVisible, areLinesVisible, areEddysVisible }) => {
  return (
    <SVG
      lines={areLinesVisible.value ? rapid.lines : []}
      eddys={areEddysVisible.value ? rapid.eddys: []}
      areHandlesVisible={areHandlesVisible}
      reducers={reducers}
      
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
