import React from "react";
import PropTypes from "prop-types";
import { paramCase } from "change-case";
import { useHistory } from "react-router-dom";

/** A label on the overview navigation map */

const MapLabel = ({
  name,
  mapLabel,
  toggleMap
}) => {

  const [[x1,y1],[x2,y2]] = mapLabel

  let history = useHistory();
  const handleClick = (to) => {
    toggleMap();
    to && history.push(to);
  };

  return (
    <g>
      <polyline
        className="pointer"
        points={`${x1}, ${y1} ${x2}, ${y2}`}
      />
      <text
        x={x2 + 1}
        y={y2 + 1}
        onClick={() => handleClick(`${paramCase(name)}`)}
        class="map-label"
      >
        {name}
      </text>
    </g>
  );
};

export default MapLabel;

MapLabel.defaultProps = {};

MapLabel.propTypes = {
  /** The base url */
  url: PropTypes.string.isRequired,
  /** The name of the rapid, to be used in the navigation */
  name: PropTypes.string.isRequired,
  /** The coordinates of the position of the label and pointer */
  mapLabel: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  /** Turns off the map when clicked */
  toggleMap: PropTypes.func.isRequired,
};
