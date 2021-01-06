import React from "react";
import { useSelector } from "react-redux";
import { useMousePosition, useKeyPress } from "../shared/_utils";

/**
 * A simple display component that displays a circular point.
 *
 * @param {number} x - The x coord position of the point on a 100x100 layout.
 * @param {number} y - The y coord position of the point on a 100x100 layout.
 */

const Point = ({ typeIndex, lineIndex, x, y, pointIndex, reducers }) => {
  const isCtrlPressed = useKeyPress("Control");
  return (
    <circle
      className="ad-Point"
      onMouseDown={(e) => {
        isCtrlPressed
          ? reducers.removePoint({ lineIndex, pointIndex })
          : reducers.setDraggedPoint({ lineIndex, pointIndex, typeIndex });
        e.stopPropagation();
      }}
      cx={x}
      cy={y}
      r={1}
    />
  );
};

export default Point;
