import React from "react";
import PropTypes from "prop-types";
import DraggableNode from "../DraggableNode";
import usePathParser from "./_utils/usePathParser";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({ name, desc, pathCommands, x, y, showNodes = true }) => {
  const [nodes, path] = usePathParser(pathCommands);

  return (
    <g>
      {showNodes &&
        nodes.map((node, i) => (
          <>
            <DraggableNode color="red" node={node} key={i} index={i} />
            {/*Put midpoint node here*/}
          </>
        ))}
      <path d={path} stroke="black" />
    </g>
  );
};

export default Line;
