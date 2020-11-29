import React from "react";
import PropTypes from "prop-types";
import filterRange from "../../tools/filterRange";

/** The title pf the rapid that shows a name and description based on water level. */

const RapidHeader = ({ name, description, level }) => {
  return (
    <div className="rapid-header">
      <div className="rapid-name"> {name} </div>
      <div className="rapid-desc">{description}</div>
    </div>
  );
};

export default RapidHeader;
