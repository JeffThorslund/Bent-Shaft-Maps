import React, { useState } from "react";
import { Field } from "formik"; 
import DragDrop from "./dragdrop/DragDrop"

//A min/max input component.
export const Range = ({name}) => {
  return (
    <>
      <label htmlFor="levelRange">River Name</label>
      <Field id="range.0" name={`${name}.0`} placeholder="0" />
      <Field id="range.1" name={`${name}.1`} placeholder="1" />
    </>
  );
};

export const Dragger = ({rivers}) => {
  return <DragDrop rivers={rivers} />
}
