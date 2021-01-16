import React from "react";
import { useMousePosition } from "./_utils";
import Point from "./Point";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Hydraulic = ({
  line,
  featureType = "hydraulic",
  lineIndex,
  reducers,
  areHandlesVisible,
}) => {
  const coords = useMousePosition();
  return (
    <g
      className="draggable"
      onMouseDown={(e) => {
        reducers.setDraggedFeature(coords);
        e.stopPropagation();
      }}
    >
      <path
        onMouseOver={() => reducers.setActiveType({ featureType, lineIndex })}
        className={featureType}
        d={`M ${line[0].x} ${line[0].y} L ${line[1].x} ${line[1].y}`}
      />
      {areHandlesVisible.value &&
        line.map((p, i) => (
          <Point
            featureType={featureType}
            lineIndex={lineIndex}
            pointIndex={i}
            reducers={reducers}
            x={p.x}
            y={p.y}
            key={i}
          />
        ))}
    </g>
  );
};

export default Hydraulic;
