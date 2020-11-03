import React from "react";

const ConnectingLine = ({
  pointerCoords,
  tagCoords,
  dimensions,
  refs = {},
}) => {
  console.log((refs.tag.width / dimensions.x) * 100);

  const stroke = () => {
    const coords = {};

    if (
      pointerCoords.x >
      tagCoords.x + (refs.tag.width / dimensions.x) * 100
    ) {
      coords.x1 = tagCoords.x + (refs.tag.width / dimensions.x) * 100;
      coords.x2 = pointerCoords.x;
    } else {
      coords.x1 = tagCoords.x;
      coords.x2 = pointerCoords.x;
    }

    if (pointerCoords.y > tagCoords.y + 5) {
      coords.y1 = tagCoords.y + 5;
      coords.y2 = pointerCoords.y;
    } else {
      coords.y1 = tagCoords.y;
      coords.y2 = pointerCoords.y;
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
