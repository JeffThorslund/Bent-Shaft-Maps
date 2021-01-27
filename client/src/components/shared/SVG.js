import React from 'react';
// UTILS
import { useSelector } from 'react-redux';
import { useMousePosition, useKeyPress } from './_utils';

const SVG = ({
  children,
  reducers: {
    setPointCoords,
    setCubicCoords,
    setFeatureCoords,
    cancelDragging,
    addPoint,
  },
}) => {
  const { draggedPoint, draggedCubic, draggedFeature } = useSelector(
    (state) => state.testEnvironment
  );

  const coords = useMousePosition();
  const isCtrlPressed = useKeyPress('Control');

  const handleMouseMove = () => {
    if (draggedPoint) {
      setPointCoords(coords);
    } else if (draggedCubic !== false) {
      setCubicCoords(coords);
    } else if (draggedFeature) {
      setFeatureCoords(coords);
    } else return null;
  };

  return (
    <svg
      className="svg-wrapper"
      id="vector-container"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      onMouseMove={() => handleMouseMove()}
      onMouseUp={() => cancelDragging()}
      onMouseDown={() => isCtrlPressed && addPoint(coords)}
      tabIndex="0"
    >
      {children}
    </svg>
  );
};

export default SVG;
