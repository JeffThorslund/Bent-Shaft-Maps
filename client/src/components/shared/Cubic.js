import React from "react";

const Cubic = ({ lineIndex, pointIndex, reducers, ...props }) => {
  return (
    <g className="ad-Anchor">
      <line
        className="ad-Anchor-line"
        x1={props.p1x}
        y1={props.p1y}
        x2={props.x1}
        y2={props.y1}
      />
      <line
        className="ad-Anchor-line"
        x1={props.p2x}
        y1={props.p2y}
        x2={props.x2}
        y2={props.y2}
      />
      <circle
        className="ad-Anchor-point"
        onMouseDown={(e) =>
          reducers.setDraggedCubic({ lineIndex, pointIndex, anchor: 0 })
        }
        cx={props.x1}
        cy={props.y1}
        r={1}
      />
      <circle
        className="ad-Anchor-point"
        onMouseDown={(e) =>
         reducers.setDraggedCubic({ lineIndex, pointIndex, anchor: 1 })
        }
        cx={props.x2}
        cy={props.y2}
        r={1}
      />
    </g>
  );
};

export default Cubic;
