import React from "react";
import { useDrag } from "./_utils";

const Node = ({ color, node, environment }) => {
  const { handleMouseDown } = useDrag(node, environment);

  return (
    <>
      <circle
        cx={node.x}
        cy={node.y}
        r="1"
        stroke={color}
        strokeWidth="3"
        fill={color}
        onMouseDown={handleMouseDown}
      />
      <text x={node.x} y={node.y} fontSize={4} fill={"#0000ff"}>
        {node.i}
      </text>
    </>
  );
};

export default Node;
