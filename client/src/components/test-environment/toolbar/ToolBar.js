import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ToolBar = ({
  areHandlesVisible,
  areLinesVisible,
  areEddysVisible,
  areIndexVisible,
  isMenuVisible,
}) => (
  <Form className="d-inline-flex flex-column border m-1">
    <div className="p-2">
      <Form.Check
        type="checkbox"
        label="Show Handles"
        checked={areHandlesVisible.value}
        onChange={areHandlesVisible.set}
      />
    </div>

    <div className="border-top p-2">
      <Form.Check
        type="checkbox"
        label="Show Lines"
        checked={areLinesVisible.value}
        onChange={areLinesVisible.set}
      />
      <Form.Check
        type="checkbox"
        label="Show Eddys"
        checked={areEddysVisible.value}
        onChange={areEddysVisible.set}
      />
      <Form.Check
        type="checkbox"
        label="Show Index"
        checked={areIndexVisible.value}
        onChange={areIndexVisible.set}
      />
    </div>
    <Button
      variant="primary"
      style={{ position: 'absolute', top: 140, width: 139 }}
      onClick={() => isMenuVisible.set()}
    >
      Add Feature
    </Button>
  </Form>
);

export default ToolBar;
