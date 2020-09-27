import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateAndEditFields = ({
  values,
  config,
  topic,
  index,
  setIndex,
  setNext,
  path
}) => {
  const fields = (index) =>
    Object.entries(config)
      .filter(([_, value]) => value.renderField)
      .map(([key, _], i) => {

        console.log(`${path}${key}`)

        return (
          <div key={i}>
            <Field
              name={`${path}${key}`}
              placeholder={key}
              type="text"
            />
          </div>
        );
      });

  const tags = values
    .filter((river) => Object.keys(river).length > 1)
    .map((river, i) => {
      return (
        <div key={i}>
          <Button onClick={() => setIndex(i)}>{river.name}</Button>
        </div>
      );
    });

  return (
    <Row className="d-flex flex-row">
      <Col>
        <h1>Create New {topic}</h1>
        {fields(values.length - 1)}
        <Button onClick={() => setNext(true)}>Create {topic}</Button>
      </Col>
      <Col>
        <h1>Edit Existing {topic}</h1>
        {tags}
        {index < values.length-1 ? (
          <>
            {fields(index)}
            <Button onClick={() => setNext(true)}>Save Changes</Button>
          </>
        ) : null}
      </Col>
    </Row>
  );
};

export default CreateAndEditFields;
