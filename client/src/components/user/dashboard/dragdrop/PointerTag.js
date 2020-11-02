import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import Draggable, { DraggableCore } from "react-draggable";

const PointerTag = ({
  rapid,
  dimensions = { x: 100, y: 200 },
  getDimensions,
  defaultPosition,
}) => {
  //Coordinates in px of tag position. Anti-pattern?
  const [coords, setCoords] = useState({
    x: defaultPosition.x,
    y: defaultPosition.y,
  });

  //Drag behavior
  const handleDrag = (e, data) => {
    let x, y;
    setCoords((prev) => {
      
      //Set x boundaries
      if (data.x > 0 && data.x < dimensions.x) {
        x = ((data.x / dimensions.x) * 100).toFixed(2);
      } else {
        x = prev.x;
      }
      //Set y boundaries
      if (data.y > 0 && data.y < dimensions.y) {
        y = ((data.y / dimensions.y) * 100).toFixed(2);
      } else {
        y = prev.y;
      }

      return {
        x,
        y,
      };
    });
  };

  return (
    <DraggableCore
      //get new dimensions in case resized
      onStart={getDimensions}
      onDrag={handleDrag}
      axis="none"
    >
      <div
        style={{
          position: "absolute",
          color: "red",
          left: `${coords.x}%`,
          top: `${coords.y}%`,
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
