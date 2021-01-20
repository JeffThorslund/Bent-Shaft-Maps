import React from 'react';
import { Form } from 'react-bootstrap';

const ToolBar = ({ areHandlesVisible, areLinesVisible, areEddysVisible }) => (
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
        type={"checkbox"}
        label={"Show Hydraulics"}
        checked={props.areHydraulicsVisible.value}
        onChange={props.areHydraulicsVisible.set}
      />
    </div>
  </Form>
);

export default ToolBar;
