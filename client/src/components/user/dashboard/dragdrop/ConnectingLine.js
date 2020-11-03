import React from "react";

const ConnectingLine = ({
  pointerCoords,
  tagCoords,
  containerDimensions,
  tagDimensions,
}) => {

  const stroke = () => {
    const coords = {
      x2: pointerCoords.x,
      y2: pointerCoords.y,
    };

    let tagDimensionsPercentage = {
      width: (tagDimensions.width / containerDimensions.width) * 100,
      height: (tagDimensions.height / containerDimensions.height) * 100,
    };

    if (pointerCoords.x < tagCoords.x) {
      coords.x1 = tagCoords.x;
    } else if (
      pointerCoords.x > tagCoords.x &&
      pointerCoords.x < tagCoords.x + tagDimensionsPercentage.width
    ) {
      coords.x1 = tagCoords.x + tagDimensionsPercentage.width / 2;
    } else {
      coords.x1 = tagCoords.x + tagDimensionsPercentage.width;
    }

    if (pointerCoords.y < tagCoords.y) {
      coords.y1 = tagCoords.y;
    } else if (
      pointerCoords.y > tagCoords.y &&
      pointerCoords.y < tagCoords.y + tagDimensionsPercentage.height
    ) {
      coords.y1 = tagCoords.y + tagDimensionsPercentage.height / 2;
    } else {
      coords.y1 = tagCoords.y + tagDimensionsPercentage.height;
    }

    return coords;
  };

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="tip-tag-connection-line"
      style={{ border: "black 2px solid" }}
    >
      <line
        x1={stroke().x1}
        y1={stroke().y1}
        x2={stroke().x2}
        y2={stroke().y2}
      />
    </svg>
  );
};

export default ConnectingLine;
