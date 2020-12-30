import React from "react";
import Node from "./Node";
import usePathParser from "./_utils/usePathParser";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({ line, environment, showNodes = true }) => {
  const [nodes, bezier1Nodes, bezier2Nodes, path] = usePathParser(line);

  console.log(nodes, bezier1Nodes, bezier2Nodes, path)

  return (
    <g>
      {showNodes && (
        <>
          {nodes.map((node, i) => (
            <Node color="red" node={node} environment={environment} key={i} />
          ))}

          {bezier1Nodes.map((node, i) => (
            <Node color="black" node={node} environment={environment} key={i} />
          ))}

          {bezier2Nodes.map((node, i) => (
            <Node color="pink" node={node} environment={environment} key={i} />
          ))}
        </>
      )}

      <path d={path} stroke="black" fill="none" />
    </g>
  );
};

export default Line;
