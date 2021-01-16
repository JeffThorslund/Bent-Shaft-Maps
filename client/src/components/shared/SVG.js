import React from "react";
import { useSelector } from "react-redux";
import { useMousePosition, useKeyPress } from "../shared/_utils";

const SVG = ({ reducers, children }) => {
  const { draggedPoint, draggedCubic, draggedFeature } = useSelector(
    (state) => state.testEnvironment
  );

  const coords = useMousePosition();
  const isCtrlPressed = useKeyPress("Control");

  const handleMouseMove = () => {
    if (draggedPoint) {
      reducers.setPointCoords({ coords });
    } else if (draggedCubic !== false) {
      reducers.setCubicCoords({ coords, anchor: draggedCubic });
    } else if (draggedFeature) {
      reducers.setFeatureCoords(coords);
    } else return;
  };
  return (
    <svg
      className="svg-wrapper"
      id="vector-container"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      onMouseMove={() => handleMouseMove()}
      onMouseUp={() => reducers.cancelDragging()}
      onMouseDown={() => isCtrlPressed && reducers.addPoint({ coords })}
      tabIndex="0"
    >
      {children}
    </svg>
  );
};

export default SVG;
