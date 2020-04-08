import React from "react";
import "./MapLabel.css";

const MapLabel = props => {
  const style = {
    top: props.top,
    left: props.left
  };

  const pickFromMap = name => {
    props.selectRapid(name);
    props.toggleMap();
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
          <polyline className="pointer" points={props.pointer} />
        </svg>
      </div>
    </div>
  );
};

export default MapLabel;
