import React, { useState } from "react";
import CreateAndEditFields from "../components/CreateAndEditFields";
import EditSection from "./EditSection";

const EditRiver = ({ config, values }) => {
  const [riverIndex, setRiverIndex] = useState(values.length - 1);
  const [next, setNext] = useState(false);
  const path = `[${riverIndex}]`;

  return (
    <>
      {!next ? (
        <CreateAndEditFields
          values={values}
          topic="River"
          index={riverIndex}
          setIndex={setRiverIndex}
          setNext={setNext}
          config={config}
          path={path}
        />
      ) : (
        <EditSection
          config={config.sections.type[0]}
          values={values[riverIndex].sections}
          path={`[${riverIndex}].sections`}
        />
      )}
    </>
  );
};

EditRiver.propTypes = {};

export default EditRiver;
