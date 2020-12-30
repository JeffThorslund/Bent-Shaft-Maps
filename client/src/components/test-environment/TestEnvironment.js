import React from "react";
import { Table } from "react-bootstrap";
import Line from "../shared/Line";
import { useSelector } from "react-redux";
import Point from "../shared/Point";
import Cubic from "../shared/Cubic";
import { buildPath, useDrag, useMousePosition } from "../shared/_utils";
import store from "../../rematch/store";

const TestEnvironment = () => {
  const { dispatch } = store;
  const { lines } = useSelector((state) => state.testEnvironment);

  const coords = useMousePosition();

  const handleMouseMove = (e) => {
    if (/*this.state.draggedPoint*/ true) {
      //this.setPointCoords(this.getMouseCoords(e));
      dispatch.testEnvironment.setPointCoords({ coords });
    }
    // else if (this.state.draggedCubic !== false) {
    //   this.setCubicCoords(this.getMouseCoords(e), this.state.draggedCubic);
    // }
  };

  return (
    <svg
      className="Features"
      id="vector-container"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <text x="20" y="35" fill={"black"}>
        Hi
      </text>
      <g>
        {lines.map((line) => (
          <>
            <path
              className="ad-Path"
              d={buildPath({ points: line, closePath: false })}
            />
            {line.map((p, i, a) => {
              let anchors = [];
              if (p.c) {
                anchors.push(
                  <Cubic
                    index={i}
                    p1x={a[i - 1].x}
                    p1y={a[i - 1].y}
                    p2x={p.x}
                    p2y={p.y}
                    x1={p.c[0].x}
                    y1={p.c[0].y}
                    x2={p.c[1].x}
                    y2={p.c[1].y}
                    setDraggedCubic={() =>
                      dispatch.testEnvironment.setDraggedCubic({ index: i })
                    }
                  />
                );
              }
              return (
                <>
                  <Point
                    index={i}
                    x={p.x}
                    y={p.y}
                    setDraggedPoint={() =>
                      dispatch.testEnvironment.setDraggedPoint({ index: i })
                    }
                  />
                  {anchors}
                </>
              );
            })}
          </>
        ))}
      </g>
    </svg>
  );
};

export default TestEnvironment;
