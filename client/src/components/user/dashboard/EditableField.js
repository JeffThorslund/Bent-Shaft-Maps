import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { PencilIcon, CheckIcon } from "@primer/octicons-react";

/**
 * A component that can be edited on click by clicking a pencil Icon.
 */

const EditableField = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const handleToggle = () => {};

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>

      <div className="d-flex flex-row">
        {isEditable ? <Form.Control {...props} /> : <div> {props.value} </div>}
        <div
          onClick={() => {
            setIsEditable(!isEditable);
          }}
        >
          {isEditable ? <CheckIcon /> : <PencilIcon />}
        </div>
      </div>
    </Form.Group>
  );
};

export default EditableField;
