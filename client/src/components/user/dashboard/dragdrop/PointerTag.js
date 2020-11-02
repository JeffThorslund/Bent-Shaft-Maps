import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import Draggable, { DraggableCore } from "react-draggable";

const PointerTag = ({
  rapid,
  dimensions = { x: 100, y: 200 },
  getDimensions,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <DraggableCore
      onStart={() => getDimensions()}
      onDrag={(e, data) => {
        setCoords((prev) => {
          let x = prev.x + data.deltaX;
          let y = prev.y + data.deltaY;

          if (x < 0 || x > dimensions.x) {
            x = prev.x;
          }

          if (y < 0 || y > dimensions.y) {
            y = prev.y;
          }

          return { x, y };
        });
      }}
      axis="none"
    >
      <div
        style={{
          position: "absolute",
          color: "red",
          top: `${(coords.y / dimensions.y) * 100}%`,
          left: `${(coords.x / dimensions.x) * 100}%`,
        }}
      >
        {coords.x} | {coords.y}
      </div>
    </DraggableCore>
  );

  // return (
  //   <>
  //     <Draggable
  //       bounds="parent"
  //       //defaultPosition={{ x: 100, y: rapid.mapLabel[1][0] }}
  //       axis="both"
  //       //onStart={(e, data) => console.log(data)}
  //       onDrag={(e, data) => setTagPosition([data.x, data.y])}
  //       //onStop={(e, data) => console.log(data)}
  //       scale={scale}
  //       position={{ x: coords.x, y: coords.y }}
  //     >
  //       <div>
  //         <div className="handle">{rapid.name}</div>
  //         {tagPosition}
  //       </div>
  //     </Draggable>

  //     <Draggable
  //       bounds="parent"
  //       defaultPosition={{ x: 100, y: rapid.mapLabel[1][0] }}
  //       axis="both"
  //       //onStart={(e, data) => console.log(data)}
  //       onDrag={(e, data) => setTipPosition([data.x, data.y])}
  //       //onStop={(e, data) => console.log(data)}
  //       scale={scale}
  //     >
  //       <div>
  //         <div className="handle">end</div>
  //         {tipPosition}
  //       </div>
  //     </Draggable>

  //     <svg height="100%" width="100%" className="tip-tag-connection-line">
  //       <line
  //         x1={`${tipPosition[0]}`}
  //         y1={`${tipPosition[1]}`}
  //         x2={`${tagPosition[0]}`}
  //         y2={`${tagPosition[1]}`}
  //       />
  //     </svg>
  //   </>
  // );
};

export default PointerTag;
