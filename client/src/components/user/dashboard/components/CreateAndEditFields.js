import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateAndEditFields = ({ config, values, topic, path, children }) => {
  console.log(values);

  const [index, setIndex] = useState(null);
  const [next, setNext] = useState(false);

  console.log(values);
  console.log(values[topic]);
  console.log(values[topic][index]);

  // const fields = Object.entries(config[topic])
  //   .filter(([_, value]) => value.renderField)
  //   .map(([key, _], i) => {
  //     //console.log(`${path}.${key}`);

  //     return (
  //       <div key={i}>
  //         <Field name={`${path}.${key}`} placeholder={key} type="text" />
  //       </div>
  //     );
  //   });

  const tags = values[topic].map((item, i) => {
    return (
      <div key={i}>
        <Button onClick={() => setIndex(i)}>{item.name}</Button>
      </div>
    );
  });

  tags.push("robby");

  return !next ? (
    <Row className="d-flex flex-row">
      <Col>
        <h1>Edit Existing {topic}</h1>
        {tags}
        {/* {fields} */}
        <Button onClick={() => setNext(true)}>Save Changes</Button>
      </Col>
    </Row>
  ) : (
    children({
      config: config[topic],
      values: values[topic][index],
      prevIndex: index,
      path: path,
    })
  );
};

export default CreateAndEditFields;
