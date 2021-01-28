import React from 'react';
// UTILS
import { textAttributes, circleAttributes, lineAttributes } from './_utils';

const Cubic = ({
  areIndexVisible,
  setDraggedCubic,
  featureType,
  lineIndex,
  pointIndex,
  p1x,
  p1y,
  p2x,
  p2y,
  x1,
  y1,
  x2,
  y2,
}) => {
  const handleDrag = (anchor) => {
    setDraggedCubic({ lineIndex, pointIndex, featureType, anchor });
  };

  return (
    <g className="ad-Anchor">
      <circle {...circleAttributes(x1, y1, 'bezier-anchor', () => handleDrag(0))} />
      <line {...lineAttributes('anchor-line', p1x, p1y, x1, y1)} />
      <text {...textAttributes(areIndexVisible.value, x1, y1)}>{`${pointIndex}|0`}</text>

      <circle {...circleAttributes(x2, y2, 'bezier-anchor', () => handleDrag(1))} />
      <line {...lineAttributes('anchor-line', p2x, p2y, x2, y2)} />
      <text {...textAttributes(areIndexVisible.value, x2, y2)}>{`${pointIndex}|1`}</text>
    </g>
  );
};

export default Cubic;
