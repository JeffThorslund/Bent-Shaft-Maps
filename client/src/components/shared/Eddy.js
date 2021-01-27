import React from 'react';
// UTILS
import { buildPath, useMousePosition, useKeyPress } from './_utils';
// COMPONENTS
import Point from './Point';
import Cubic from './Cubic';

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Eddy = ({
  featureType = 'eddy',
  areHandlesVisible,
  areIndexVisible,
  lineIndex,
  reducers,
  vector,
}) => {
  const {
    removeFeature,
    setDraggedFeature,
    setActiveType,
    setDraggedCubic,
    removePoint,
    setDraggedPoint,
  } = reducers;

  const isCtrlPressed = useKeyPress('Control');
  const coords = useMousePosition();

  return (
    <g
      className={isCtrlPressed ? 'remove' : 'draggable'}
      onMouseDown={(e) => {
        if (isCtrlPressed) {
          removeFeature();
        } else {
          setDraggedFeature(coords);
        }
      }}
    >
      <path
        className={featureType}
        onMouseOver={() => setActiveType({ featureType, lineIndex })}
        d={buildPath({ points: vector, closePath: true })}
      />
      {areHandlesVisible.value &&
        vector.map((p, i, a) => {
          const anchors = [];
          const p2x = p.z ? a[0].x : p.x;
          const p2y = p.z ? a[0].y : p.y;
          const point = p.z ? null : (
            <Point
              areIndexVisible={areIndexVisible}
              setDraggedPoint={setDraggedPoint}
              removePoint={removePoint}
              featureType={featureType}
              lineIndex={lineIndex}
              pointIndex={i}
              x={p.x}
              y={p.y}
              key={i}
            />
          );

          if (p.c) {
            anchors.push(
              <Cubic
                areIndexVisible={areIndexVisible}
                setDraggedCubic={setDraggedCubic}
                featureType={featureType}
                lineIndex={lineIndex}
                pointIndex={i}
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
