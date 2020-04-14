import React from "react";
import "./MapLabel.css";
import PropTypes from "prop-types";

const MapLabel = (props) => {
  const pointerDirection = () => {
    switch (
      props.mapLabel.pointerDirection // starting coord
    ) {
      case "top":
        return "50,100 ";
      case "right":
        return "0,50 ";
      case "bottom":
        return "50,0 ";
      case "left":
        return "100,50 ";
      default:
      // code block
    }
  };

  const style = {
    top: props.mapLabel.titleTop,
    left: props.mapLabel.titleLeft,
  };

  const pickFromMap = (name) => {
    //Click on a mapLabel
    props.toggleSetting(props.setting); //Closes map
    props.selectRapid(name); //Sets chosen rapid to current
  };

  const className = `MapLabel ${props.mapLabel.pointerDirection}`;

  return (
    <div className={className} style={style}>
      <div className="name" onClick={() => pickFromMap(props.name)}>
        {props.name}
      </div>

      <svg
        viewBox="0 0 100 100"
        height="20vh"
        width="20vh"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          className="pointer"
          points={
            pointerDirection(props.mapLabel.pointerDirection) +
            props.mapLabel.pointerCoordinates
          }
        />
      </svg>
    </div>
  );
};

export default MapLabel;

MapLabel.propTypes = {
  name: PropTypes.string.isRequired,
  mapLabel: PropTypes.object.isRequired,
  toggleSetting: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
