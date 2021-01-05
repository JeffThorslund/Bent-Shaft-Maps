import React from "react";
import { buildPath } from "./_utils";
import Point from "./Point";
import Cubic from "./Cubic";

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Path = ({ line, typeIndex, lineIndex, reducers, showHandles }) => {
  return (
    <>
      <path
        className={typeIndex ? "ad-Path-eddy" : "ad-Path"}
        d={buildPath({ points: line, closePath: typeIndex })}
      />
      {showHandles &&
        line.map((p, i, a) => {
          let anchors = [];
          if (p.z) {
            anchors.push(
              <Cubic
                lineIndex={lineIndex}
                pointIndex={i}
                reducers={reducers}
                p1x={a[i - 1].x}
                p1y={a[i - 1].y}
                p2x={a[0].x}
                p2y={a[0].y}
                x1={p.c[0].x}
                y1={p.c[0].y}
                x2={p.c[1].x}
                y2={p.c[1].y}
                key={i}
              />
            );
            return <React.Fragment key={i}>{anchors}</React.Fragment>;
          } else if (p.c) {
            anchors.push(
              <Cubic
                typeIndex={typeIndex}
                lineIndex={lineIndex}
                pointIndex={i}
                reducers={reducers}
                p1x={a[i - 1].x}
                p1y={a[i - 1].y}
                p2x={p.x}
                p2y={p.y}
                x1={p.c[0].x}
                y1={p.c[0].y}
                x2={p.c[1].x}
                y2={p.c[1].y}
                key={i}
              />
            );
          }
          return (
            <React.Fragment key={i}>
              <Point
                typeIndex={typeIndex}
                lineIndex={lineIndex}
                pointIndex={i}
                reducers={reducers}
                x={p.x}
                y={p.y}
                key={i}
              />
              {anchors}
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Path;
