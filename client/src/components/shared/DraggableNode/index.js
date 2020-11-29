import React from "react";
import useDrag from "./_utils/useDrag";

const DraggableNode = ({color, node, index}) => {

  const { x, y, handleMouseDown } = useDrag(node, index);

  return (
    <circle
      cx={x}
      cy={y}
      r="1"
      stroke="black"
      stroke-width="3"
      fill={color}
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableNode;
