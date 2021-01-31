import React from 'react';
// UTILS
import { buildPath } from './_utils';
// COMPONENTS
import Point from './Point';
import Cubic from './Cubic';
import FeatureShell from './FeatureShell';

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({
  featureType = 'line',
  areHandlesVisible,
  areIndexVisible,
  lineIndex,
  vector,
  reducers: {
    setDraggedFeature,
    setDraggedCubic,
    setDraggedPoint,
    removeFeature,
    setActiveType,
    removePoint,
  },
}) => (
  <FeatureShell
    setDraggedFeature={setDraggedFeature}
    removeFeature={removeFeature}
    children={
      <>
        <path
          onMouseOver={() => setActiveType({ featureType, lineIndex })}
          className={featureType}
          d={buildPath(vector)}
        />
        {areHandlesVisible.value &&
          vector.map((p, i, a) => {
            const anchors = [];
            const point = p.z ? null : (
              <Point
                areIndexVisible={areIndexVisible}
                setDraggedPoint={setDraggedPoint}
                removePoint={removePoint}
                featureType={featureType}
                lineIndex={lineIndex}
                coords={{ p, i }}
                key={i}
              />
            );

            if (p.c) {
              anchors.push(
                <Cubic
                  areIndexVisible={areIndexVisible}
                  setDraggedCubic={setDraggedCubic}
                  featureType={featureType}
                  lineIndex={lineIndex}
                  coords={{ p, i, a }}
                  key={i}
                />
              );
            }
            return (
              <React.Fragment key={i}>
                {anchors}
                {point}
              </React.Fragment>
            );
          })}
      </>
    }
  />
);

export default Line;
