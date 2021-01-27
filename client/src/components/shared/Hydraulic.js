import React from 'react';
import { useMousePosition, useKeyPress } from './_utils';
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
  const isCtrlPressed = useKeyPress('Control');
  const coords = useMousePosition();

  // Find handle coordinates

  const center = {
    x: (line[1].x + line[0].x) / 2,
    y: (line[1].y + line[0].y) / 2,
  };

  const quarter = [
    {
      x: (line[0].x + center.x) / 2,
      y: (line[0].y + center.y) / 2,
    },
    { x: (line[1].x + center.x) / 2, y: (line[1].y + center.y) / 2 },
  ];

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
        d={`M ${line[0].x} ${line[0].y} L ${line[1].x} ${line[1].y}`}
        strokeWidth={width}
        stroke="CadetBlue"
      />

      {quarter.map((point, i) => (
        <g
          onMouseDown={(e) => {
            reducers.setHydraulicWidth({
              featureType,
              lineIndex,
              pointIndex: i,
            });
            e.stopPropagation();
          }}
          key={i}
        >
          <circle cx={point.x} cy={point.y} r="2" fillOpacity={0.4} />
          <text
            x={point.x - 1}
            y={point.y + 1}
            fill="white"
            fontSize="2px"
            style={{ userSelect: 'none' }}
          >
            {i ? '+' : '-'}
          </text>
        </g>
      ))}

      {areHandlesVisible.value &&
        line.map((p, i) => (
          <Point
            areIndexVisible={areIndexVisible}
            featureType={featureType}
            lineIndex={lineIndex}
            pointIndex={i}
            setDraggedPoint={reducers.setDraggedPoint}
            removePoint={reducers.removePoint}
            x={p.x}
            y={p.y}
            key={i}
          />
        ))}
    </g>
  );
};

export default Hydraulic;
