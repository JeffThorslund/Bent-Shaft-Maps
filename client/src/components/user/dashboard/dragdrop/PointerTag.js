import React, { useState, useEffect, useRef } from "react";
import { DraggableCore } from "react-draggable";
import ConnectingLine from "./ConnectingLine";

const PointerTag = ({
  rapid: {
    overviewLabel: { pointer, tag },
    name,
  },
  containerDimensions = { width: 500, height: 500 },
  getContainerDimensions,
}) => {
  const refContainer = useRef(null);
  const [tagDimensions, setTagDimensions] = useState({});
  useEffect(() => {
    setTagDimensions({
      width: refContainer.current.offsetWidth,
      height: refContainer.current.offsetHeight,
    });
  }, []);

  //Coordinates in px of tag position. Anti-pattern?

  const [tagCoords, setTagCoords] = useState({
    x: tag.x,
    y: tag.y,
  });

  const [pointerCoords, setPointerCoords] = useState({
    x: pointer.x,
    y: pointer.y,
  });

  //Drag behavior
  const handleDrag = (e, data, setter, tagDimensions) => {
    let x, y;

    setter((prev) => {
      //Set x boundaries
      if (
        data.x > 0 &&
        data.x + tagDimensions.width < containerDimensions.width
      ) {
        x = (data.x / containerDimensions.width) * 100;
      } else {
        x = prev.x;
      }
      //Set y boundaries
      if (
        data.y > 0 &&
        data.y + tagDimensions.height < containerDimensions.height
      ) {
        y = (data.y / containerDimensions.height) * 100;
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
        //get new containerDimensions in case resized
        onStart={getContainerDimensions}
        onDrag={(e, data) => handleDrag(e, data, setTagCoords, tagDimensions)}
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
          className="tag"
        >
          {name}
        </div>
      </DraggableCore>
      {tagDimensions.hasOwnProperty("width") &&
        tagDimensions.hasOwnProperty("height") && (
          <ConnectingLine
            pointerCoords={pointerCoords}
            tagCoords={tagCoords}
            containerDimensions={containerDimensions}
            tagDimensions={tagDimensions}
          />
        )}

      <DraggableCore
        //get new containerDimensions in case resized
        onStart={getContainerDimensions}
        onDrag={(e, data) =>
          handleDrag(e, data, setPointerCoords, tagDimensions)
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
        >
          Pointer
        </div>
      </DraggableCore>
    </div>
  );
};

export default PointerTag;
