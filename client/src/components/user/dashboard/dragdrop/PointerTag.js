import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDrag } from "react-dnd";
import Draggable, { DraggableCore } from "react-draggable";
import ConnectingLine from "./ConnectingLine";

const PointerTag = ({
  rapid: { mapLabel, name },
  dimensions = { x: 100, y: 200 },
  getDimensions,
}) => {
  const [refs, setRefs] = useState({});

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setRefs((prev) => ({
        ...prev,
        [node.className]: {
          width: node.offsetWidth,
          height: node.offsetHeight,
        },
      }));
    }
  }, []);

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
  const handleDrag = (e, data, setter, dims) => {
    let x, y;

    let pointerTagWidth = dims.width;
    let pointerTagHeight = dims.height;

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
        onDrag={(e, data) => handleDrag(e, data, setTagCoords, refs.tag)}
        axis="none"
      >
        <div
          style={{
            position: "absolute",
            color: "red",
            left: `${tagCoords.x}%`,
            top: `${tagCoords.y}%`,
          }}
          ref={measuredRef}
          className="tag"
        >
          {name}
        </div>
      </DraggableCore>
      {refs.hasOwnProperty("tag") && refs.hasOwnProperty("pointer") && (
        <ConnectingLine
          pointerCoords={pointerCoords}
          tagCoords={tagCoords}
          dimensions={dimensions}
          refs={refs}
        />
      )}

      <DraggableCore
        //get new dimensions in case resized
        onStart={getDimensions}
        onDrag={(e, data) =>
          handleDrag(e, data, setPointerCoords, refs.pointer)
        }
        axis="none"
      >
        <div
          style={{
            position: "absolute",
            color: "red",
            left: `${pointerCoords.x}%`,
            top: `${pointerCoords.y}%`,
          }}
          className="pointer"
          ref={measuredRef}
        >
          Pointer
        </div>
      </DraggableCore>
    </div>
  );
};

export default PointerTag;
