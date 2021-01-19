import React from 'react';
import { buildPath, useMousePosition } from './_utils';
import Point from './Point';
import Cubic from './Cubic';

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Eddy = ({
  line,
  featureType = 'eddy',
  lineIndex,
  reducers,
  areHandlesVisible,
}) => {
  const coords = useMousePosition();
  return (
    <g
      className="draggable"
      onMouseDown={(e) => {
        reducers.setDraggedFeature(coords);
        e.stopPropagation();
      }}
    >
      <path
        onMouseOver={() => reducers.setActiveType({ featureType, lineIndex })}
        className={featureType}
        d={buildPath({
          points: line,
          closePath: true,
        })}
      />
      {areHandlesVisible.value &&
        line.map((p, i, a) => {
          const anchors = [];
          const p2x = p.z ? a[0].x : p.x;
          const p2y = p.z ? a[0].y : p.y;
          const point = p.z ? null : (
            <Point
              featureType={featureType}
              lineIndex={lineIndex}
              pointIndex={i}
              reducers={reducers}
              x={p.x}
              y={p.y}
              key={i}
            />
          );

          if (p.c) {
            anchors.push(
              <Cubic
                featureType={featureType}
                lineIndex={lineIndex}
                pointIndex={i}
                reducers={reducers}
                p1x={a[i - 1].x}
                p1y={a[i - 1].y}
                p2x={p2x}
                p2y={p2y}
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
              {point}
              {anchors}
            </React.Fragment>
          );
        })}
    </g>
  );
};

export default Eddy;
