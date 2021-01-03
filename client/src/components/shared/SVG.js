import React from "react";
import Line from "../rapid/Line";
import { useSelector } from "react-redux";
import { useMousePosition } from "../shared/_utils";
import { useRef, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Popover from "../rapid/Popover";

const SVG = ({ lines, reducers, showHandles }) => {
  const { draggedPoint, draggedCubic } = useSelector(
    (state) => state.testEnvironment
  );

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      ReactTooltip.rebuild();
    }
  });

  const coords = useMousePosition();

  const handleMouseMove = (e) => {
    if (draggedPoint) {
      reducers.setPointCoords({ coords });
    } else if (draggedCubic !== false) {
      reducers.setCubicCoords({ coords, anchor: draggedCubic });
    }
  };

  return (
    <>
      <svg
        className="Features"
        id="vector-container"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={() => reducers.cancelDragging()}
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
      <Popover />
    </>
  );
};

export default SVG;
