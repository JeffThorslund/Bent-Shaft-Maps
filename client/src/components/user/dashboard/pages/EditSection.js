import React, { useState } from "react";
import PropTypes from "prop-types";
import CreateAndEditFields from "../components/CreateAndEditFields";
import Form from "react-bootstrap/Form";

const EditRiver = ({ config, values }) => {
  const [sectionIndex, setSectionIndex] = useState(null);
  const [next, setNext] = useState(false);

  const fieldProps = Object.entries(config).map(([key, value]) => {
    return { name: key, placeholder: key, renderField: value.renderField };
  });

  return (
    <>
      {!next ? (
        <CreateAndEditFields
          values={values}
          topic="Section"
          fieldProps={fieldProps}
          index={sectionIndex}
          setIndex={setSectionIndex}
          setNext={setNext}
        />
      ) : (
        "Next"
      )}
    </>
  );
};

EditRiver.propTypes = {};

export default EditRiver;
