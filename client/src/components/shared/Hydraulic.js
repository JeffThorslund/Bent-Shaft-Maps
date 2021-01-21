import React, { useState } from 'react';
import { useMousePosition } from './_utils';
import Point from './Point';

/**
 * A line represents a safe route to navigate the river at a specific water level
 */

const Hydraulic = ({
  line,
  featureType = 'hydraulic',
  lineIndex,
  reducers,
  areHandlesVisible,
  areIndexVisible,
  width,
}) => {
  const coords = useMousePosition();

  // Find handle coordinates

  const center = {
    x: (line[1].x + line[0].x) / 2,
    y: (line[1].y + line[0].y) / 2,
  };

  const perpSetup = [
    {
      x: -(line[1].y - line[0].y),
      y: line[1].x - line[0].x,
    },
    {
      x: line[1].y - line[0].y,
      y: -(line[1].x - line[0].x),
    },
  ];

  const normalMagnitude = Math.sqrt(perpSetup[0].x ** 2 + perpSetup[1].y ** 2);

  const perp = perpSetup.map((point) => ({
    x: ((point.x / normalMagnitude) * width) / 2 + center.x,
    y: ((point.y / normalMagnitude) * width) / 2 + center.y,
  }));

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
        d={`M ${line[0].x} ${line[0].y} L ${line[1].x} ${line[1].y}`}
        strokeWidth={width}
        stroke="red"
      />
      {perp.map((point, i) => (
        <circle
          cx={point.x}
          cy={point.y}
          r="2"
          onMouseDown={(e) => {
            reducers.setDraggedHydraulic({
              featureType,
              lineIndex,
              pointIndex: i,
            });
            e.stopPropagation();
          }}
        />
      ))}

      {areHandlesVisible.value &&
        line.map((p, i) => (
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
        ))}
    </g>
  );
};

export default Hydraulic;
