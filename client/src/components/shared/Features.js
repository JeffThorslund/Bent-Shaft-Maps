import React from 'react';
import PropTypes from 'prop-types';
import SVG from './SVG';
import Line from './Line';
import Eddy from './Eddy';

/**
 * Holds all interact-able elements of a rapid. It should make an array of SVG elements to pass down.
 */

const Features = ({
  rapid,
  reducers,
  areHandlesVisible,
  areLinesVisible,
  areEddysVisible,
}) => {
  const { lines, eddys } = rapid;
  return (
    <SVG reducers={reducers}>
      {areLinesVisible.value &&
        lines.map((line, i) => (
          <Line
            line={line.vector}
            lineIndex={i}
            reducers={reducers}
            areHandlesVisible={areHandlesVisible}
            key={line.id}
          />
        ))}
      {areEddysVisible.value &&
        eddys.map((eddy, i) => (
          <Eddy
            line={eddy.vector}
            lineIndex={i}
            reducers={reducers}
            areHandlesVisible={areHandlesVisible}
            key={eddy.id}
          />
        ))}
    </SVG>
  );
};

Features.propTypes = {
  /** The current water level */
  level: PropTypes.number.isRequired,
  /** The rapid data object */
  rapid: PropTypes.object.isRequired,
};

export default Features;
