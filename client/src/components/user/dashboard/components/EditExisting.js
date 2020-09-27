import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";

const EditExisting = ({ values, fieldProps, setStep, topic }) => {
  const [selected, setSelected] = useState(null);

  const tags = values
    .filter((river) => Object.keys(river).length > 1)
    .map((river, i) => {
      return <Button onClick={() => setSelected(i)}>{river.name}</Button>;
    });

  const field =
    selected !== null ? (
      <Field name={`[${selected}].name`} placeholder="River" type="text" />
    ) : null;

  return (
    <div>
      <h1>Edit an existing {topic}</h1>
      <div className="pb-3">{tags}</div>
      {selected !== null ? (
        <div className="pb-3">
          <h2>Edit fields of choice</h2>
          <div>{field}</div>
        </div>
      ) : null}
      <Button onClick={() => setStep((prev) => prev.step + 1)}>
        Save and Continue
      </Button>
    </div>
  );
};

EditExisting.propTypes = {};

export default EditExisting;
