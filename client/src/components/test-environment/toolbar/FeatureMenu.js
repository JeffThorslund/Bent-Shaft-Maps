import React, { useState } from 'react';
// UTILS
import { useForm } from 'react-hook-form';
import { useMousePosition } from '../../shared/_utils';
// COMPONENTS
import { Card, Button } from 'react-bootstrap';

const FeatureMenu = ({ show, reducers, isMenuVisible }) => {
  const { register, handleSubmit } = useForm({});
  const [type, setType] = useState('');
  const coords = useMousePosition();

  const onSubmit = (data) => {
    data.type = type;
    data.coords = coords;
    reducers.addFeature(data);
    isMenuVisible();
  };

  return (
    <Card className={show ? 'context' : 'context hide'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Add New Feature</label>
        <input // Name
          className="form-control"
          name="name"
          placeholder="Name"
          ref={register}
          required
        />
        <textarea // Description
          className="form-control"
          name="desc"
          placeholder="Description..."
          rows={10}
          ref={register}
          required
        />
        <Button // Line
          type="submit"
          variant="outline-primary"
          onClick={() => setType('line')}
        >
          Add Line
        </Button>
        <Button // Eddy
          type="submit"
          variant="outline-primary"
          onClick={() => setType('eddy')}
        >
          Add Eddy
        </Button>
        <Button // Hydraulic
          type="submit"
          variant="outline-primary"
          onClick={() => setType('hydraulic')}
        >
          Add Hydraulic
        </Button>
        <Button // Close
          variant="outline-danger"
          onClick={(e) => isMenuVisible(e)}
        >
          Close
        </Button>
      </form>
    </Card>
  );
};

export default FeatureMenu;
