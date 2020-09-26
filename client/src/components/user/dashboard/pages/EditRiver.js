import React from "react";
import PropTypes from "prop-types";
import CreateNew from "../components/CreateNew";
import EditExisting from "../components/EditExisting";
import Form from "react-bootstrap/Form";

const EditRiver = ({ config, values }) => {
  const fieldProps = Object.entries(config).map(([key, value]) => {
    return { name: key, placeholder: key, renderfield: value.renderfield };
  });

  return (
    <div className="d-flex flex-row justify-content-around">
      <CreateNew values={values} fieldProps={fieldProps} />
      <EditExisting values={values} fieldProps={fieldProps} />
    </div>
  );
};

EditRiver.propTypes = {};

export default EditRiver;
