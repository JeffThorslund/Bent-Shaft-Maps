import React, { useState, useEffect, useRef } from "react";
import PointerTag from "./PointerTag";
import Image from "react-bootstrap";

/**
 * x. Create bounding box. Make item draggable around box.
 * 2. Create a grid system that uses current coord system to place in bounding box.
 * 3. Map over array to create many dragabble items, each with different default position.
 * 4. Create pointer and tag component, both draggable and setting values accordingly.
 * 5. Incorperate redux into drag and drop actions to set position of values.
 */

const DragDrop = ({ rivers }) => {
  const refContainer = useRef(null);
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 });

  const getDimensions = () => {
      setDimensions({
        x: refContainer.current.offsetWidth,
        y: refContainer.current.offsetHeight,
      });
    };

  // useEffect(() => {
    

  //   getDimensions();

  //   //window.addEventListener("resize", getDimensions);
  // }, []);

  const tags = rivers[0].sections[0].rapids.map((rapid) => (
    <PointerTag rapid={rapid} dimensions={dimensions} />
  ));

  return (
    <div
      className="border m-1"
      ref={refContainer}
      style={{ position: "relative", height: "900px", width: "1600px" }}
    >
      <div className="background-map h-100 w-100"></div>
      {/* {tags} */}

      <PointerTag
        rapid={rivers[0].sections[0].rapids[0]}
        dimensions={dimensions}
        getDimensions = {getDimensions}
      />
    </div>
  );
};

export default DragDrop;
