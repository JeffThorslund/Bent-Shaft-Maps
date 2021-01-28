import React from 'react';
// UTILS
import { useKeyPress, textAttributes, circleAttributes } from './_utils';

/**
 * A simple display component that displays a circular point
 */

const Point = ({
  areIndexVisible,
  setDraggedPoint,
  removePoint,
  featureType,
  lineIndex,
  pointIndex,
  x,
  y,
}) => {
  const isCtrlPressed = useKeyPress('Control');

  const handleMouseDown = () => {
    if (isCtrlPressed) {
      removePoint({ lineIndex, pointIndex });
    } else {
      setDraggedPoint({ lineIndex, pointIndex, featureType });
    }
  };

  return (
    <>
      <circle {...circleAttributes(x, y, 'point', () => handleMouseDown())} />
      <text {...textAttributes(areIndexVisible.value, x, y)}>{pointIndex}</text>
    </>
  );
};

export default Point;
