import React from 'react';
// UTILS
import { textAttributes, circleAttributes, lineAttributes } from './_utils';

const Cubic = ({
  coords: { p, i, a },
  areIndexVisible,
  setDraggedCubic,
  featureType,
  lineIndex,
}) => {
  const handleDrag = (anchor) => {
    setDraggedCubic({ lineIndex, pointIndex: i, featureType, anchor });
  };

  const p2x = p.z ? a[0].x : p.x,
    p2y = p.z ? a[0].y : p.y,
    p1x = a[i - 1].x,
    p1y = a[i - 1].y,
    x1 = p.c[0].x,
    y1 = p.c[0].y,
    x2 = p.c[1].x,
    y2 = p.c[1].y;

  return (
    <g className="ad-Anchor">
      <circle
        {...circleAttributes(x1, y1, 1, 'bezier-anchor', () => handleDrag(0))}
      />
      <line {...lineAttributes('anchor-line', p1x, p1y, x1, y1)} />
      <text {...textAttributes(areIndexVisible.value, x1, y1)}>{`${i}|0`}</text>

      <circle
        {...circleAttributes(x2, y2, 1, 'bezier-anchor', () => handleDrag(1))}
      />
      <line {...lineAttributes('anchor-line', p2x, p2y, x2, y2)} />
      <text {...textAttributes(areIndexVisible.value, x2, y2)}>{`${i}|1`}</text>
    </g>
  );
};

export default Cubic;
