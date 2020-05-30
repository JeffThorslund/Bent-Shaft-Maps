import { Field } from "formik";
import { capitalCase } from "change-case";
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

export const caseMapList = (elem, name, mapsList) => {
  let options = mapsList.map((path) => {
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

export const caseArrowList = (elem, name, allRapids) => {
  let options = [];
  for (let rapid of allRapids.rapids) {
    options.push(<option value={rapid.id}>{rapid.name}</option>);
  }

  return (
    <div className="input-field">
      <div>Link to:</div>
      <Field as="select" name={name} key={elem}>
        {options}
      </Field>
    </div>
  );
};

export const caseSymbolList = (elem, name) => {
  return (
    <div className="input-field">
      <div>{capitalCase(elem)}</div>
      <Field as="select" name={name} key={elem}>
        <option value="caution">Caution</option>
        <option value="portage">Portage</option>
      </Field>
    </div>
  );
};
