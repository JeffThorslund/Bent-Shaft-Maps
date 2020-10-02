import React, { useState } from "react";
import { Field } from "formik";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditableField from "./EditableField";
import { capitalCase } from "change-case";

const CreateAndEditFields = ({
  config,
  values,
  topic,
  nextTopic,
  children,
  prevPath = "",
  setFieldValue,
  subtitle,
}) => {
  const [index, setIndex] = useState(null);
  const [next, setNext] = useState(false);

  const path = `${prevPath}${topic}[${index}]`;

  const fields = Object.entries(config[topic][0])
    .filter(([_, value]) => {
      return (
        value.hasOwnProperty("label") && value.hasOwnProperty("placeholder")
      );
    })
    .map(([key, value], i) => {
      return (
        <div key={i}>
          <Field
            name={`${path}.${key}`}
            label={value.label}
            placeholder={value.placeholder}
            as={EditableField}
            type="text"
          />
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

  const handleAddNew = (obj) => {
    const initialValues = {};

    console.log(obj)

    for (let item in obj) {
      console.log(obj[item], nextTopic)
      if (obj[item].hasOwnProperty("init")) {
        initialValues[item] = obj[item].init;
      } else if (item===nextTopic){
        initialValues[item] = [];
      }
    }

    setIndex(values[topic].length);

    setFieldValue(
      `${prevPath}${topic}[${values[topic].length}]`,
      initialValues
    );
  };

  return !next ? (
    <Row className="justify-content-center">
      <Col xs={8}>
        <h1> {capitalCase(topic)}</h1>
        <h2> {subtitle}</h2>
        <div>Select of the following rivers.</div>
        <div>{tags}</div>
        <div>OR</div>
        <Button onClick={() => handleAddNew(config[topic][0])}>
          Add New {capitalCase(topic.slice(0, -1))}
        </Button>
        {index !== null && (
          <div className="border-top">
            {fields}
            <Button onClick={() => setNext(true)}>Save Changes</Button>
          </div>
        )}
      </Col>
    </Row>
  ) : (
    children({
      config: config[topic][0],
      values: values[topic][index],
      prevPath: path,
      setFieldValue: setFieldValue,
      topic: nextTopic
    })
  );
};

export default CreateAndEditFields;
