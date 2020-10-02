import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { PencilIcon, CheckIcon } from "@primer/octicons-react";

/**
 * A component that can be edited on click by clicking a pencil Icon.
 */

const EditableField = (props) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  );
};

export default EditableField;
