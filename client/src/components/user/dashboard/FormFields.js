import React from "react";
import { Field } from "formik";
import FormComponents from "./FormComponents";
import Form from "react-bootstrap/Form";

const FormFields = ({ path, config, topic, setFieldValue }) => {
  const fields = Object.entries(config[topic][0])
    .filter(([_, value]) => {
      return value.hasOwnProperty("elementType");
    })
    .map(([key, value], i) => {
      if (value.elementType === "range") {
        return [1, 1].map((_, i) => (
          <div key={i}>
            <Field
              name={`${path}.${key}[${i}]`}
              label={value.label}
              placeholder={value.placeholder}
              as={FormComponents.input}
              type="number"
            />
          </div>
        ));
      }

      else if (value.elementType === "file") {
        return <input id="file" name="file" type="file" onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
        }} />
      }

      

      return (
        <div key={i}>
          <Field
            name={`${path}.${key}`}
            label={value.label}
            placeholder={value.placeholder}
            as={FormComponents[value.elementType]}
          />
        </div>
      );
    });
  return (
    <div>
      {fields}
      <hr />
    </div>
  );
};

export default FormFields;
