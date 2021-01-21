import React from 'react';
import SVG from './SVG';
import Line from './Line';
import Eddy from './Eddy';
import Hydraulic from './Hydraulic';

/**
 * Holds all interact-able elements of a rapid. It should make an array of SVG elements to pass down.
 */

const Features = ({
  rapid,
  reducers,
  areHandlesVisible,
  areLinesVisible,
  areEddysVisible,
  areHydraulicsVisible,
}) => {
  const { lines, eddys, hydraulics } = rapid;
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
      {areHydraulicsVisible.value &&
        hydraulics.map((hydraulic, i) => (
          <Hydraulic
            line={hydraulic.vector}
            width={hydraulic.width}
            lineIndex={i}
            reducers={reducers}
            areHandlesVisible={areHandlesVisible}
            key={hydraulic.id}
          />
        ))}
    </SVG>
  );
};

export default Features;
