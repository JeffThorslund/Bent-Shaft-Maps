import React from "react";
import Draggable from "react-draggable";
import PointerTag from "./PointerTag";
import Image from "react-bootstrap"

/**
 * x. Create bounding box. Make item draggable around box.
 * 2. Create a grid system that uses current coord system to place in bounding box.
 * 3. Map over array to create many dragabble items, each with different default position.
 * 4. Create pointer and tag component, both draggable and setting values accordingly.
 * 5. Incorperate redux into drag and drop actions to set position of values.
 */

const DragDrop = ({ rivers }) => {
  const tags = rivers[0].sections[0].rapids.map((rapid) => (
   <PointerTag rapid={rapid}/>
  ));

  return (
    <div
      className="border flex-grow-1 m-1"
      style={{ position: "relative" }}
    >
      <div className="background-map h-100 w-100"></div>
      {tags}
    </div>
  );
};

export default DragDrop;
