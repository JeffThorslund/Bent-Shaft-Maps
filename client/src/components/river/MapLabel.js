import React from "react";
import PropTypes from "prop-types";
import GeneralButton from "../general/GeneralButton";
import { paramCase } from "change-case";

const MapLabel = (props) => {
  const { titleTop, titleLeft, pointerDirection } = props.mapLabel;

  let { pointerCoordinates } = props.mapLabel;

  const pointerSetUp = (pointerDirection) => {
    switch (
      pointerDirection // starting coord
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
        return "nothing";
    }
  };

  pointerCoordinates = pointerCoordinates.join(",");

  const style = {
    top: `${titleTop}%`,
    left: `${titleLeft}%`,
  };

  const className = `map-label d-flex ${props.mapLabel.pointerDirection}`;

  return (
    <div className={className} style={style}>
      <GeneralButton
        to={`${props.url}/${paramCase(props.name)}`}
        text={props.name}
        onClick={props.toggleMap}
        className="map-label-button"
      />
      <svg
        viewBox="0 0 100 100"
        height="20vh"
        width="10vw"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polyline
          className="pointer"
          points={`${pointerSetUp(pointerDirection)} ${pointerCoordinates}`}
        />
      </svg>
    </div>
  );
};

export default MapLabel;

MapLabel.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mapLabel: PropTypes.object.isRequired,
  toggleSetting: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
