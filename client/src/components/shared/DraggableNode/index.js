import React from "react";
import useDrag from "./_utils/useDrag";

const DraggableNode = ({color, node, index, isEndpointNode}) => {

  const { handleMouseDown } = useDrag(node, index, isEndpointNode);

  return (
    <circle
      cx={node.x}
      cy={node.y}
      r="1"
      stroke={color}
      strokeWidth="3"
      fill={color}
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableNode;