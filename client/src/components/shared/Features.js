import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import Eddy from "../rapid/Eddy";
import Hydraulic from "../rapid/Hydraulic";
import Symbol from "../rapid/Symbol";
import Popover from "../rapid/Popover";
import filterRange from "../rapid/_utils/filterRange";

import SVG from "./SVG";

/**
 * Holds all interact-able elements of a rapid
 */

const Features = ({ level, rapid, reducers, showHandles }) => {

  return (
    <>
      <SVG lines={rapid.lines} reducers={reducers} showHandles={showHandles}/>
    </>
  );
};

Features.propTypes = {
  /** The current water level */
  level: PropTypes.number.isRequired,
  /** The rapid data object */
  rapid: PropTypes.object.isRequired,
};

export default Features;
