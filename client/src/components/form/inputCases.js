import { Field } from "formik";
import { capitalCase } from "change-case";
import { Tooltip } from "./inputLabels";
import React from "react";

export const casePointerDirection = (elem, featureType, name) => {
  return (
    <div className="input-field">
      <div className="field-holder">
        <div>{capitalCase(elem)}:</div>
        <Tooltip elem={elem} featureType={featureType} />
      </div>
      <Field as="select" name={name} key={elem}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </Field>
    </div>
  );
};

export const caseMapList = (elem, featureType, name, mapsList) => {
  let options = mapsList.map((path) => {
    path = path.split(".")[0];
    return <option value={path}>{path}</option>;
  });

  return (
    <div className="input-field">
      <div className="field-holder">
        <div>Background Map:</div>
        <Tooltip elem={elem} featureType={featureType} />
      </div>

      <Field as="select" name={name} key={elem}>
        {options}
      </Field>
    </div>
  );
};

export const caseArrowList = (elem, featureType, name, allRapids) => {
  let options = [];
  for (let rapid of allRapids.rapids) {
    options.push(<option value={rapid.id}>{rapid.name}</option>);
  }

  return (
    <div className="input-field">
      <div className="field-holder">
        <div>Link to:</div>
        <Tooltip elem={elem} featureType={featureType} />
      </div>
      <Field as="select" name={name} key={elem}>
        {options}
      </Field>
    </div>
  );
};

export const caseSymbolList = (elem, featureType, name) => {
  return (
    <div className="input-field">
      <div className="field-holder">
        <div>{capitalCase(elem)}</div>
        <Tooltip elem={elem} featureType={featureType} />
      </div>
      <Field as="select" name={name} key={elem}>
        <option value="caution">Caution</option>
        <option value="portage">Portage</option>
      </Field>
    </div>
  );
};
