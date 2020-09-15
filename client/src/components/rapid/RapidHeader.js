import React from "react";
import PropTypes from "prop-types";
import filterRange from "../../tools/filterRange";

/** The title pf the rapid that shows a name and description based on water level. */

const RapidHeader = ({ name, description, level }) => {
  let filteredDescription = description
    .filter((oneDescription) => filterRange(level, oneDescription.range))
    .map((oneDescription) => oneDescription.text);

  return (
    <div className="rapid-header">
      <div className="rapid-name"> {name} </div>
      <div className="rapid-desc">{filteredDescription}</div>
    </div>
  );
};

RapidHeader.propTypes = {
  /** Name of rapid */
  name: PropTypes.string.isRequired,
  /** Array of possible descriptions based on water level */
  description: PropTypes.array.isRequired,
  /** Water level of the river */
  level: PropTypes.number.isRequired,
};

export default RapidHeader;
