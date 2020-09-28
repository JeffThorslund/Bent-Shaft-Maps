import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import createNewChunk from "./createNewChunk";
//import { river } from "../../../../config";

const CreateAndEditFields = ({
  config,
  values,
  topic,
  children,
  prevPath = "",
  setFieldValue,
  newChunk,
}) => {
  const [index, setIndex] = useState(null);
  const [next, setNext] = useState(false);

  const path = `${prevPath}${topic}[${index}]`;

  //console.log(createNewChunk(config, topic));

  const fields = Object.entries(config[topic][0])
    .filter(([_, value]) => value.renderField)
    .map(([key, _], i) => {
      return (
        <div key={i}>
          <Field name={`${path}.${key}`} placeholder={key} type="text" />
        </div>
      );
    });

  const tags = values[topic].map((item, i) => {
    return (
      <div key={i}>
        <Button onClick={() => setIndex(i)}>{item.name}</Button>
      </div>
    );
  });

  console.log(`${path}${topic}[${values[topic].length}]`, newChunk);

  return (
    <>
      <div>
        {topic}:{index}
      </div>
      <div>path: {path}</div>
      {!next ? (
        <Row className="d-flex flex-row">
          <Col>
            <h1>Edit Existing {topic}</h1>
            {tags}

            <Button
              onClick={() =>
                setFieldValue(`${prevPath}${topic}[${values[topic].length}]`, newChunk)
              }
            >
              Add New
            </Button>

            {index !== null && (
              <>
                {fields}
                <Button onClick={() => setNext(true)}>Save Changes</Button>
              </>
            )}
          </Col>
        </Row>
      ) : (
        children({
          config: config[topic][0],
          values: values[topic][index],
          prevPath: path,
          setFieldValue:setFieldValue
        })
      )}
    </>
  );
};

export default CreateAndEditFields;
