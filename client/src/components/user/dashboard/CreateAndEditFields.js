import React, { useState } from "react";
import { Field } from "formik";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditableField from "./EditableField";
import { capitalCase } from "change-case";
import { PlusCircleIcon } from "@primer/octicons-react";

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
      <Button onClick={() => setIndex(i)} key={i} className="m-1">
        {item.name}
      </Button>
    );
  });

  tags.push(
    <Button
      onClick={() => handleAddNew(config[topic][0])}
      className="m-1"
      variant="danger"
    >
      Add New {capitalCase(topic.slice(0, -1))}
    </Button>
  );

  const handleAddNew = (obj) => {
    if (
      values[topic][values[topic].length - 1]["name"] !== obj["name"]["init"]
    ) {
      const initialValues = {};
      for (let item in obj) {
        console.log(obj[item], nextTopic);
        if (obj[item].hasOwnProperty("init")) {
          initialValues[item] = obj[item].init;
        } else if (item === nextTopic) {
          initialValues[item] = [];
        }
      }

      setIndex(values[topic].length);

      setFieldValue(
        `${prevPath}${topic}[${values[topic].length}]`,
        initialValues
      );
    }
  };

  return !next ? (
    <Row className="justify-content-center">
      <Col xs={6}>
        <h1 className="text-center pt-2"> {capitalCase(topic)}</h1>
        <div className="text-center p-2"> {subtitle}</div>
        <h4>
          Select an existing {topic.slice(0, -1)} to edit <b>OR</b> add one that
          does not already exist.
        </h4>
        <div>{tags}</div>

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
      topic: nextTopic,
    })
  );
};

export default CreateAndEditFields;
