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

const ImageUpload = (props) => {
  return (
    <Form.Group>
      <Form.File name="hello"/>
    </Form.Group>
  );
};

export default {
  input: EditableTextField,
  textarea: EditableTextAreaField,
  file: ImageUpload
};
