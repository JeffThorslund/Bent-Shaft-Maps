import { Formik, Form, Field, FieldArray } from "formik";
import { capitalCase, paramCase } from "change-case";
import React from "react";

export const casePointerDirection = (elem, name) => {
  return (
    <div className="input-field">
      <div>{capitalCase(elem)}:</div>
      <Field as="select" name={name} key={elem}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </Field>
    </div>
  );
};

export const caseMapList = (elem, name, riverList) => {
  let options = riverList.map((path) => {
    path = path.split(".")[0];
    return <option value={path}>{path}</option>;
  });

  return (
    <div className="input-field">
      <div>{capitalCase(elem)}:</div>
      <Field as="select" name={name} key={elem}>
        {options}
      </Field>
    </div>
  );
};
