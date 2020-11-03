import React, { useState, useEffect, useRef } from "react";
import PointerTag from "./PointerTag";

const DragDrop = ({ rivers }) => {
  const refContainer = useRef(null);

  // Parent container dimensions.
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 });

  // Set dimensions based of the parent container.
  const getDimensions = () => {
    setDimensions({
      x: refContainer.current.offsetWidth,
      y: refContainer.current.offsetHeight,
    });
  };

  useEffect(() => {
    getDimensions();
  }, []);

  const tags = rivers[0].sections[0].rapids.map((rapid) => (
    <PointerTag
      rapid={rapid}
      dimensions={dimensions}
      defaultPosition={{ x: 10, y: 20 }}
      getDimensions={getDimensions}
    />
  ));

  return (
    <div
      className="border m-1"
      ref={refContainer}
      style={{ position: "relative", height: "900px", width: "1600px" }}
    >
      <div className="background-map h-100 w-100"></div>
      {tags}
    </div>
  );
};

export default DragDrop;
