import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditExisting = ({ rivers, fieldProps }) => {
  const tags = rivers.map((river) => {
    return <div>{river.name}</div>;
  });

  return (
    <div>
      <h1>Edit an existing river</h1>
      {tags}
    </div>
  );
};

EditExisting.propTypes = {};

export default EditExisting;
