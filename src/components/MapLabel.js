import React from 'react';
import './MapLabel.css';
import PropTypes from 'prop-types';

const MapLabel = (props) => {
  const style = {
    top: props.mapLabel.titleTop,
    left: props.mapLabel.titleLeft,
  };

  const pickFromMap = (name) => {
    props.toggleMap();
    props.selectRapid(name);
  };

  return (
    <div className="MapLabel" style={style}>
      <div className="name" onClick={() => pickFromMap(props.name)}>
        {props.name}
      </div>

      <div>
        <svg
          viewBox="0 0 100 100"
          height="20vh"
          width="20vw"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline className="pointer" points={props.mapLabel.pointerCoordinates} />
        </svg>
      </div>
    </div>
  );
};

export default MapLabel;

MapLabel.propTypes = {
  name: PropTypes.string.isRequired,
  mapLabel: PropTypes.object.isRequired,
  toggleMap: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
