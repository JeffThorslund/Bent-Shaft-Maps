import React from 'react';
// UTILS
import { circleAttributes, textAttributes } from './_utils';
// COMPONENTS
import FeatureShell from './FeatureShell';
import Point from './Point';

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Hydraulic = ({
  featureType = 'hydraulic',
  areHandlesVisible,
  areIndexVisible,
  lineIndex,
  vector,
  width,
  reducers: {
    setDraggedFeature,
    removeFeature,
    setActiveType,
    setHydraulicWidth,
    setDraggedPoint,
    removePoint,
  },
}) => {
  // Find handle coordinates
  const x0 = vector[0].x,
    y0 = vector[0].y,
    x1 = vector[1].x,
    y1 = vector[1].y;

  const quarter = [
    {
      x: (x0 + (x1 + x0) / 2) / 2,
      y: (y0 + (y1 + y0) / 2) / 2,
    },
    {
      x: (x1 + (x1 + x0) / 2) / 2,
      y: (y1 + (y1 + y0) / 2) / 2,
    },
  ];

  const anchors = quarter.map(({ x, y }, i) => (
    <g key={i}>
      <circle
        {...circleAttributes(x, y, 2, 'width-anchor', () =>
          setHydraulicWidth({ lineIndex, pointIndex: i })
        )}
      />
      <text {...textAttributes(true, x, y)}>{i ? '+' : '-'}</text>
    </g>
  ));

  const points = vector.map((p, i) => (
    <Point
      areIndexVisible={areIndexVisible}
      featureType={featureType}
      lineIndex={lineIndex}
      setDraggedPoint={setDraggedPoint}
      removePoint={removePoint}
      coords={{ p, i }}
      key={i}
    />
  ));

  return (
    <FeatureShell
      setDraggedFeature={setDraggedFeature}
      removeFeature={removeFeature}
      children={
        <>
          <path
            onMouseOver={() => setActiveType({ featureType, lineIndex })}
            d={`M ${x0} ${y0} L ${x1} ${y1}`}
            className={featureType}
            strokeWidth={width}
          />
          {areHandlesVisible.value && anchors}
          {areHandlesVisible.value && points}
        </>
      }
    />
  );
};

export default Hydraulic;
