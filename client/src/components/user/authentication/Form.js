import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Register = ({ formData, children }) => {
  const { title, fieldData, buttonData } = formData;

  //Login Input Fields
  const [userEntry, setUserEntry] = useState({});

  //onChange Handler
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserEntry((userEntry) => {
      return {
        ...userEntry,
        [name]: value,
      };
    });
  };

  //Form Data
  const fields = fieldData.map((field) => {
    const name = field.attributes.name;
    return (
      <Form.Group controlId={field.controlId}>
        <Form.Label>{field.formLabel}</Form.Label>
        <Form.Control
          {...field.attributes}
          onChange={handleChange}
          value={userEntry[name]}
        />
      </Form.Group>
    );
  });

  //Button Array
  const buttons = buttonData.map((button) => {
    return (
      <Button
        variant={button.varient}
        type={button.type}
        onClick={(e)=>button.handleClick(e, userEntry)}
        className="mr-3"
      >
        {button.value}
      </Button>
    );
  });

  return (
    <Col>
      <Form>
        <h1>{title}</h1>
        {fields}
        {buttons}
      </Form>
      {children}
    </Col>
  );
};

export default Register;
