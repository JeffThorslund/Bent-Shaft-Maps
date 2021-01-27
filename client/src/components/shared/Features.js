import React from 'react';
// Components
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
  areIndexVisible,
}) => {
  const { lines, eddys, hydraulics } = rapid;

  return (
    <SVG reducers={reducers}>
      {areLinesVisible.value &&
        lines.map((line, i) => (
          <Line
            areHandlesVisible={areHandlesVisible}
            areIndexVisible={areIndexVisible}
            vector={line.vector}
            reducers={reducers}
            lineIndex={i}
            key={line.id}
          />
        ))}
      {areEddysVisible.value &&
        eddys.map((eddy, i) => (
          <Eddy
            areHandlesVisible={areHandlesVisible}
            areIndexVisible={areIndexVisible}
            vector={eddy.vector}
            reducers={reducers}
            lineIndex={i}
            key={eddy.id}
          />
        ))}
      {areHydraulicsVisible.value &&
        hydraulics.map((hydraulic, i) => (
          <Hydraulic
            areHandlesVisible={areHandlesVisible}
            areIndexVisible={areIndexVisible}
            line={hydraulic.vector}
            width={hydraulic.width}
            lineIndex={i}
            reducers={reducers}
            key={hydraulic.id}
          />
        ))}
    </SVG>
  );
};

export default Features;
