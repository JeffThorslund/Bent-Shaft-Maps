import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import Eddy from "./Eddy";
import Hydraulic from "./Hydraulic";
import Symbol from "./Symbol";
import Popover from "./Popover";
import filterRange from "./_utils/filterRange";

import SVG from "../shared/SVG";

/**
 * Holds all interact-able elements of a rapid
 */

const Features = ({ level, rapid }) => {

  const environment = ""

  const { dispatch } = store;
  const { lines, draggedPoint, draggedCubic } = useSelector(
    (state) => state.testEnvironment
  );

  // render array of lines based on selected water level
  return (
    <>
      <SVG lines={lines}/>
      <Popover />
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
