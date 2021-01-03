import React from "react";
import store from "../../rematch/store";

/**
 * A simple display component that displays a circular point.
 *
 * @param {number} x - The x coord position of the point on a 100x100 layout.
 * @param {number} y - The y coord position of the point on a 100x100 layout.
 */

const Point = ({ lineIndex, x, y, pointIndex, reducers }) => {
  const { dispatch } = store;
  return (
    <circle
      className="ad-Point"
      onMouseDown={(e) => reducers.setDraggedPoint({ lineIndex, pointIndex })}
      cx={x}
      cy={y}
      r={1}
    />
  );
};

export default Point;
