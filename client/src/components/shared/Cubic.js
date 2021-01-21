import React from 'react';

const Cubic = ({
  featureType,
  lineIndex,
  pointIndex,
  reducers,
  areIndexVisible,
  p1x,
  p1y,
  x1,
  y1,
  p2x,
  p2y,
  x2,
  y2,
}) => {
  const visibility = areIndexVisible.value ? 'visible' : 'hidden';
  return (
    <g className="ad-Anchor">
      <line className="anchor-line" x1={p1x} y1={p1y} x2={x1} y2={y1} />
      <line className="anchor-line" x1={p2x} y1={p2y} x2={x2} y2={y2} />
      <g>
        <circle
          className="bezier-anchor"
          onMouseDown={() =>
            reducers.setDraggedCubic({
              lineIndex,
              pointIndex,
              featureType,
              anchor: 0,
            })
          }
          cx={x1}
          cy={y1}
          r={1}
        />
        <text
          visibility={visibility}
          fontSize="1px"
          strokeWidth="0.01"
          fill="white"
          stroke="white"
          textAnchor="middle"
          x={x1}
          y={y1}
        >
          {`${pointIndex}|0`}
        </text>
      </g>
      <g>
        <circle
          className="bezier-anchor"
          onMouseDown={() =>
            reducers.setDraggedCubic({
              lineIndex,
              pointIndex,
              featureType,
              anchor: 1,
            })
          }
          cx={x2}
          cy={y2}
          r={1}
        />
        <text
          visibility={visibility}
          fontSize="1px"
          strokeWidth="0.01"
          fill="white"
          stroke="white"
          textAnchor="middle"
          x={x2}
          y={y2}
        >
          {`${pointIndex}|1`}
        </text>
      </g>
    </g>
  );
};

export default Cubic;
