import React from 'react';

const Cubic = ({
  featureType,
  lineIndex,
  pointIndex,
  reducers,
  p1x,
  p1y,
  x1,
  y1,
  p2x,
  p2y,
  x2,
  y2,
}) => (
  <g className="ad-Anchor">
    <line className="anchor-line" x1={p1x} y1={p1y} x2={x1} y2={y1} />
    <line className="anchor-line" x1={p2x} y1={p2y} x2={x2} y2={y2} />
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
  </g>
);

export default Cubic;
