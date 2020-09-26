import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CreateNew = ({ rivers, fieldProps }) => {
  const fields = fieldProps
    .filter((field) => {
      return field.renderfield;
    })

    .map((field, i) => {
      return (
        <Field
          name={`[${rivers.length}]${field.name}`}
          placeholder={field.placeholder}
          type="text"
          key={i}
        />
      );
    });

  return (
    <div>
      <h1>Create a new river</h1>
      {fields}
    </div>
  );
};

CreateNew.propTypes = {};

export default CreateNew;
