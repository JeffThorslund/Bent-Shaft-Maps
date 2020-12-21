import React from "react";
import useDrag from "./_utils/useDrag";

const Node = ({ color, node, index, isTestEnv, isEndpointNode }) => {
  const { handleMouseDown } = useDrag(node, index, isTestEnv, isEndpointNode);

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

export default Node;
