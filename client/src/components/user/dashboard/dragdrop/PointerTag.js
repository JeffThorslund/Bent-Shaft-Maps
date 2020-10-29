import React, { useState } from "react";
import Draggable from "react-draggable";

const PointerTag = ({ rapid }) => {
  const [tipPosition, setTipPosition] = useState([]);
  const [tagPosition, setTagPosition] = useState([]);
  return (
    <>
      <Draggable
        bounds="parent"
        defaultPosition={{ x: 100, y: rapid.mapLabel[1][0] }}
        axis="both"
        //onStart={(e, data) => console.log(data)}
        onDrag={(e, data) => setTagPosition([data.x, data.y])}
        //onStop={(e, data) => console.log(data)}
      >
        <div>
          <div className="handle">{rapid.name}</div>
          {tagPosition}
        </div>
      </Draggable>

      <Draggable
        bounds="parent"
        defaultPosition={{ x: 100, y: rapid.mapLabel[1][0] }}
        axis="both"
        //onStart={(e, data) => console.log(data)}
        onDrag={(e, data) => setTipPosition([data.x, data.y])}
        //onStop={(e, data) => console.log(data)}
      >
        <div>
          <div className="handle">end</div>
          {tipPosition}
        </div>
      </Draggable>

      <svg height="100%" width="100%" className="tip-tag-connection-line">
        <line
          x1={`${tipPosition[0]}`}
          y1={`${tipPosition[1]}`}
          x2={`${tagPosition[0]}`}
          y2={`${tagPosition[1]}`}
        />
      </svg>
    </>
  );
};

export default PointerTag;
