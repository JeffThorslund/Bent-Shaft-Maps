import React from "react";
import PropTypes from "prop-types";
import DraggableNode from "../DraggableNode";
import usePathParser from "./_utils/usePathParser";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({ name, desc, pathCommands, x, y, showNodes = true }) => {
  const [nodes, midpointNodeList, path] = usePathParser(pathCommands);

  return (
    <g>
      {showNodes &&
        nodes.map((node, i) => (
          <DraggableNode
            color="red"
            node={node}
            key={"n" + i}
            index={i}
            isEndpointNode={true}
          />
        ))}

      {showNodes &&
        midpointNodeList.map((node, i) => (
          <DraggableNode
            color="black"
            node={node}
            key={"mn" + i}
            index={i}
            isEndpointNode={false}
          />
        ))}

      <path d={path} stroke="black" />
    </g>
  );
};

export default Line;
