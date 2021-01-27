import React from 'react';
// UTILS
import { useToggle } from '../../_utils';
// COMPONENTS
import { Form, Button } from 'react-bootstrap';
import FeatureMenu from './FeatureMenu';

const ToolBar = ({
  areHandlesVisible,
  areHydraulicsVisible,
  areLinesVisible,
  areEddysVisible,
  areIndexVisible,
  reducers,
}) => {
  const isMenuVisible = useToggle(false);

  return (
    <>
      <FeatureMenu
        show={isMenuVisible.value}
        isMenuVisible={() => isMenuVisible.set()}
        reducers={reducers}
      />
      <Form className="d-inline-flex flex-column border m-1">
        <div className="p-2">
          <Form.Check // Handles
            type="checkbox"
            label="Show Handles"
            checked={areHandlesVisible.value}
            onChange={areHandlesVisible.set}
          />
        </div>
        <div className="border-top p-2">
          <Form.Check // Lines
            type="checkbox"
            label="Show Lines"
            checked={areLinesVisible.value}
            onChange={areLinesVisible.set}
          />
          <Form.Check // Eddys
            type="checkbox"
            label="Show Eddys"
            checked={areEddysVisible.value}
            onChange={areEddysVisible.set}
          />
          <Form.Check // Hydraulics
            type="checkbox"
            label="Show Hydraulics"
            checked={areHydraulicsVisible.value}
            onChange={areHydraulicsVisible.set}
          />
          <Form.Check // Index
            type="checkbox"
            label="Show Index"
            checked={areIndexVisible.value}
            onChange={areIndexVisible.set}
          />
        </div>
        <Button // Menu
          variant="primary"
          style={{ zIndex: '1' }}
          onClick={() => isMenuVisible.set()}
        >
          Add Feature
        </Button>
      </Form>
    </>
  );
};

export default ToolBar;
