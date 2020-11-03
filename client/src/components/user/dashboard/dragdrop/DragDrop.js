import React, { useState, useEffect, useRef } from "react";
import PointerTag from "./PointerTag";

const DragDrop = ({ rivers }) => {
  const refContainer = useRef(null);

  // Parent container containerDimensions.
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Set containerDimensions based of the parent container.
  const getContainerDimensions = () => {
    setContainerDimensions({
      width: refContainer.current.offsetWidth,
      height: refContainer.current.offsetHeight,
    });
  };

  useEffect(() => {
    getContainerDimensions();
  }, []);

  const tags = rivers[0].sections[0].rapids.map((rapid) => (
    <PointerTag
      rapid={rapid}
      containerDimensions={containerDimensions}
      getContainerDimensions={getContainerDimensions}
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
