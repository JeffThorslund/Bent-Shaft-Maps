import React, { useState } from "react";

const DraggableNode = ({ color, cx, cy }) => {
  
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  return (
    <circle
      cx={cx}
      cy={cy}
      r="40"
      stroke="black"
      stroke-width="3"
      fill={color}
    />
  );
};

export default DraggableNode;
