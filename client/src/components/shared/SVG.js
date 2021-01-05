import React from "react";
import Line from "./Line";
import { useSelector } from "react-redux";
import { useMousePosition } from "../shared/_utils";
import { useRef, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Popover from "../rapid/Popover";
import Eddy from "./Eddy";

const SVG = ({ lines, eddys, reducers, showHandles }) => {
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
              typeIndex={0}
              lineIndex={i}
              reducers={reducers}
              showHandles={showHandles}
              key={line.id}
            />
          ))}
        </g>
        <g>
          {eddys.map((eddy, i) => (
            <Eddy
              line={eddy.vector}
              typeIndex={1}
              lineIndex={i}
              reducers={reducers}
              showHandles={showHandles}
              key={eddy.id}
            />
          ))}
        </g>
      </svg>
      <Popover />
    </>
  );
};

export default SVG;
