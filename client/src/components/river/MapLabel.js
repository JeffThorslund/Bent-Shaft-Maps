import React from 'react';
import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { useHistory } from 'react-router-dom';

/** A label on the overview navigation map */

const MapLabel = ({ name, overviewLabel: { pointer, tag }, toggleMap }) => {
  const history = useHistory();
  const handleClick = (to) => {
    toggleMap();
    to && history.push(to);
  };

  return (
    <g>
      <polyline
        className="pointer"
        points={`${pointer.x}, ${pointer.y} ${tag.x}, ${tag.y}`}
      />
      <text
        x={pointer.y + 1}
        y={tag.y + 1}
        onClick={() => handleClick(`${paramCase(name)}`)}
        className="map-label"
      >
        {name}
      </text>
    </g>
  );
};

export default MapLabel;

MapLabel.defaultProps = {};

MapLabel.propTypes = {
  /** The name of the rapid, to be used in the navigation */
  name: PropTypes.string.isRequired,
  /** The coordinates of the position of the label and pointer */
  overviewLabel: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number))
    .isRequired,
  /** Turns off the map when clicked */
  toggleMap: PropTypes.func.isRequired,
};
