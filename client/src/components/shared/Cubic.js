import React from 'react';

const Cubic = ({ featureType, lineIndex, pointIndex, reducers, ...props }) => (
  <g className="ad-Anchor">
    <line
      className="anchor-line"
      x1={props.p1x}
      y1={props.p1y}
      x2={props.x1}
      y2={props.y1}
    />
    <line
      className="anchor-line"
      x1={props.p2x}
      y1={props.p2y}
      x2={props.x2}
      y2={props.y2}
    />
    <circle
      className="bezier-anchor"
      onMouseDown={(e) =>
        reducers.setDraggedCubic({
          lineIndex,
          pointIndex,
          featureType,
          anchor: 0,
        })
      }
      cx={props.x1}
      cy={props.y1}
      r={1}
    />
    <circle
      className="bezier-anchor"
      onMouseDown={(e) =>
        reducers.setDraggedCubic({
          lineIndex,
          pointIndex,
          featureType,
          anchor: 1,
        })
      }
      cx={props.x2}
      cy={props.y2}
      r={1}
    />
  </g>
);

export default Cubic;
