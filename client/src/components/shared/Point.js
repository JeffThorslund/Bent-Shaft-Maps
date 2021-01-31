import React from 'react';
// UTILS
import { useKeyPress, textAttributes, circleAttributes } from './_utils';

/**
 * A simple display component that displays a circular point.
 */

const Point = ({
  areIndexVisible,
  setDraggedPoint,
  removePoint,
  featureType,
  lineIndex,
  coords: { p, i },
}) => {
  const isCtrlPressed = useKeyPress('Control');

  const handleMouseDown = () => {
    if (isCtrlPressed) {
      removePoint({ lineIndex, pointIndex: i });
    } else {
      setDraggedPoint({ lineIndex, pointIndex: i, featureType });
    }
  };

  return (
    <>
      <circle {...circleAttributes(p.x, p.y, 1, 'point', handleMouseDown)} />
      <text {...textAttributes(areIndexVisible.value, p.x, p.y)}>{i}</text>
    </>
  );
};

export default Point;
