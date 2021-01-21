import React from 'react';
import { buildPath, useKeyPress, useMousePosition } from './_utils';
import Point from './Point';
import Cubic from './Cubic';

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Line = ({
  line,
  featureType = 'line',
  lineIndex,
  reducers,
  areHandlesVisible,
  areIndexVisible,
}) => {
  const isCtrlPressed = useKeyPress('Control');
  const coords = useMousePosition();
  return (
    <g
      className={isCtrlPressed ? 'remove' : 'draggable'}
      onMouseDown={(e) => {
        if (isCtrlPressed) {
          reducers.removeFeature();
        } else {
          reducers.setDraggedFeature(coords);
        }
        e.stopPropagation();
      }}
    >
      <path
        onMouseOver={() => reducers.setActiveType({ featureType, lineIndex })}
        className={featureType}
        d={buildPath({
          points: line,
          closePath: false,
        })}
      />
      {areHandlesVisible.value &&
        line.map((p, i, a) => {
          const anchors = [];
          if (p.c) {
            anchors.push(
              <Cubic
                areIndexVisible={areIndexVisible}
                featureType={featureType}
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
                areIndexVisible={areIndexVisible}
                featureType={featureType}
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
    </g>
  );
};

export default Line;
