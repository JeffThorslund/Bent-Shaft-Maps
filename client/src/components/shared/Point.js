import React from 'react'

/**
 * A simple display component that displays a circular point. 
 * 
 * @param {number} x - The x coord position of the point on a 100x100 layout.
 * @param {number} y - The y coord position of the point on a 100x100 layout.
 */

const Point = ({x, y, index, setDraggedPoint}) => {
  return (
    <circle
      className="ad-Point"
      onMouseDown={(e) => setDraggedPoint(index)}
      cx={x}
      cy={y}
      r={1}
    />
  );
}

export default Point;
