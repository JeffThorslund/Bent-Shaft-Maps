import React, { useState, useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import Draggable, { DraggableCore } from "react-draggable";

const PointerTag = ({
  rapid: { mapLabel, name },
  dimensions = { x: 100, y: 200 },
  getDimensions,
  defaultPosition,
}) => {
  const refContainer = useRef(null);
  //Coordinates in px of tag position. Anti-pattern?

  const [tagCoords, setTagCoords] = useState({
    x: mapLabel[0][0],
    y: mapLabel[0][1],
  });

  const [pointerCoords, setPointerCoords] = useState({
    x: mapLabel[1][0],
    y: mapLabel[1][1],
  });

  //Drag behavior
  const handleDrag = (e, data, setter) => {
    let x, y;

    let pointerTagWidth = refContainer.current.offsetWidth;
    let pointerTagHeight = refContainer.current.offsetHeight;

    setter((prev) => {
      //Set x boundaries
      if (data.x > 0 && data.x + pointerTagWidth < dimensions.x) {
        x = ((data.x / dimensions.x) * 100).toFixed(2);
      } else {
        x = prev.x;
      }
      //Set y boundaries
      if (data.y > 0 && data.y + pointerTagHeight < dimensions.y) {
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
    <div>
      <DraggableCore
        //get new dimensions in case resized
        onStart={getDimensions}
        onDrag={(e, data) => handleDrag(e, data, setTagCoords)}
        axis="none"
      >
        <div
          style={{
            position: "absolute",
            color: "red",
            left: `${tagCoords.x}%`,
            top: `${tagCoords.y}%`,
          }}
          ref={refContainer}
        >
          {name}
        </div>
      </DraggableCore>

      <svg height="100%" width="100%" className="tip-tag-connection-line">
        <line
          x1={`${(pointerCoords.x * dimensions.x) / 100}`}
          y1={`${(pointerCoords.y * dimensions.y) / 100}`}
          x2={`${(tagCoords.x * dimensions.x) / 100}`}
          y2={`${(tagCoords.y * dimensions.y) / 100}`}
        />
      </svg>

      <DraggableCore
        //get new dimensions in case resized
        onStart={getDimensions}
        onDrag={(e, data) => handleDrag(e, data, setPointerCoords)}
        axis="none"
      >
        <div
          style={{
            position: "absolute",
            color: "red",
            left: `${pointerCoords.x}%`,
            top: `${pointerCoords.y}%`,
          }}
          ref={refContainer}
        >
          {name} Tip
        </div>
      </DraggableCore>
    </div>
  );
};

export default PointerTag;
