import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateAndEditFields = ({ config, values, topic, children, prevPath }) => {
  const [index, setIndex] = useState(null);
  const [next, setNext] = useState(false);
  
  const path = `${prevPath}${topic}[${index}]`

  console.log(config[topic]);

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
            {fields}
            {index !== null && (
              <Button onClick={() => setNext(true)}>Save Changes</Button>
            )}
          </Col>
        </Row>
      ) : (
        children({
          config: config[topic][0],
          values: values[topic][index],
          prevPath: path,
        })
      )}
    </>
  );
};

export default CreateAndEditFields;
