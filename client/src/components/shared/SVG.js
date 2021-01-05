import React from "react";
import Line from "./Line";
import { useSelector } from "react-redux";
import { useMousePosition, useKeyPress } from "../shared/_utils";

const SVG = ({ lines, reducers, showHandles }) => {
  const { draggedPoint, draggedCubic } = useSelector(
    (state) => state.testEnvironment
  );

  const coords = useMousePosition();
  const isCtrlPressed = useKeyPress("Control");

  const handleMouseMove = () => {
    if (draggedPoint) {
      reducers.setPointCoords({ coords });
    } else if (draggedCubic !== false) {
      reducers.setCubicCoords({ coords, anchor: draggedCubic });
    } else return;
  };

  return (
    <svg
      className="Features"
      id="vector-container"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      onMouseMove={() => handleMouseMove()}
      onMouseUp={() => reducers.cancelDragging()}
      onMouseDown={(e) => isCtrlPressed && reducers.addPoint({ coords })}
      tabIndex="0"
    >
      <g>
        {lines.map((line, i) => (
          <Line
            line={line.vector}
            lineIndex={i}
            reducers={reducers}
            showHandles={showHandles}
            key={i}
          />
        ))}
      </g>
    </svg>
  );
};

export default SVG;
