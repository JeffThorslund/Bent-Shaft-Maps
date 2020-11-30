import React from "react";
import useDrag from "./_utils/useDrag";

const DraggableNode = ({color, node, index}) => {

  const { handleMouseDown } = useDrag(node, index);

  return (
    <circle
      cx={node.x}
      cy={node.y}
      r="1"
      stroke="black"
      stroke-width="3"
      fill={color}
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableNode;