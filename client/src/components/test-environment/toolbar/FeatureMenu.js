import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Button } from 'react-bootstrap';
import { useMousePosition } from '../../shared/_utils';

const FeatureMenu = ({ show, reducers, isMenuVisible }) => {
  const coords = useMousePosition();
  const [type, setType] = useState('');
  const { register, handleSubmit } = useForm({});
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
        <input
          className="form-control"
          ref={register}
          required
          name="name"
          placeholder="Name"
        />
        <textarea
          className="form-control"
          ref={register}
          required
          rows={10}
          name="desc"
          placeholder="Description..."
        />
        <Button
          type="submit"
          variant="outline-primary"
          onClick={() => setType('line')}
        >
          Add Line
        </Button>
        <Button
          type="submit"
          variant="outline-primary"
          onClick={() => setType('eddy')}
        >
          Add Eddy
        </Button>
        <Button
          type="submit"
          variant="outline-primary"
          onClick={() => setType('hydraulic')}
        >
          Add Hydraulic
        </Button>
        <Button variant="outline-danger" onClick={(e) => isMenuVisible(e)}>
          Close
        </Button>
      </form>
    </Card>
  );
};

export default FeatureMenu;
