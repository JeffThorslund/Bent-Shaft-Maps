import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { PencilIcon, CheckIcon } from "@primer/octicons-react";

/**
 * A component that is either text or textarea
 */

const EditableTextField = (props) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control {...props} as="input" />
    </Form.Group>
  );
};

const EditableTextAreaField = (props) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control {...props} as="textarea" />
    </Form.Group>
  );
};

export const SetLevel = (props) => {
  return props.data.map((field) => {
    if (field.controlId === "levelRange") {
      return (
        <Form.Group controlId={field.controlId}>
          <Form.Label>{`${field.label} Minimum`}</Form.Label>
          <Form.Control
            name={props.name[field.controlId]}
            placeholder={field.placeholder}
            as="input"
          />
          <Form.Label>{`${field.label} Maximum`}</Form.Label>
          <Form.Control
            name={props.name[field.controlId]}
            placeholder={field.placeholder}
            as="input"
          />
        </Form.Group>
      );
    } else {
      return (
        <Form.Group controlId={field.controlId}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            name={props.name[field.controlId]}
            placeholder={field.placeholder}
            as="input"
          />
        </Form.Group>
      );
    }
  });
};

export default {
  input: EditableTextField,
  textarea: EditableTextAreaField,
  SetLevel: SetLevel,
};
