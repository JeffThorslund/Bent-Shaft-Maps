import React from "react";
import { useSelector } from "react-redux";
import { useMousePosition, useKeyPress } from "../shared/_utils";
import Path from "./Path";

const SVG = ({ lines, eddys, reducers, areHandlesVisible }) => {
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
        className="svg-wrapper"
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
            <Path
              line={line.vector}
              typeIndex={0}
              lineIndex={i}
              reducers={reducers}
              areHandlesVisible={areHandlesVisible}
              key={line.id}
            />
          ))}
        </g>
        <g>
          {eddys.map((eddy, i) => (
            <Path
              line={eddy.vector}
              typeIndex={1}
              lineIndex={i}
              reducers={reducers}
              areHandlesVisible={areHandlesVisible}
              key={eddy.id}
            />
          ))}
        </g>
      </svg>
    
    
  );
};

export default SVG;
