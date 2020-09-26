import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";

const CreateNew = ({ values, fieldProps }) => {
  const fields = fieldProps
    .filter((field) => {
      return field.renderfield;
    })

    .map((field, i) => {
      return (
        <Field
          name={`[${values.length - 1}]${field.name}`}
          placeholder={field.placeholder}
          type="text"
          key={i}
        />
      );
    });

  return (
    <div>
      <h1>Create a new river</h1>
      <div>{fields}</div>
      <Button>Create River</Button>
    </div>
  );
};

CreateNew.propTypes = {};

export default CreateNew;
