import React from "react";
import PropTypes from "prop-types";
import GeneralButton from "../general/GeneralButton";
import { paramCase } from "change-case";

const MapLabel = ({
  url,
  name,
  mapLabel: { titleTop, titleLeft, pointerDirection, pointerCoordinates },
  toggleMap,
}) => {

  // const pointerSetUp = (pointerDirection) => {
  //   switch (
  //     pointerDirection // starting coord
  //   ) {
  //     case "top":
  //       return "50,100 ";

  //     case "right":
  //       return "0,50 ";

  //     case "bottom":
  //       return "50,0 ";

  //     case "left":
  //       return "100,50 ";

  //     default:
  //       return "nothing";
  //   }
  // };

  // pointerCoordinates = pointerCoordinates.join(",");

  const style = {
    bottom: `${titleTop}%`,
    left: `${titleLeft}%`,
  };

  const className = `map-label d-flex ${pointerDirection}`;

  return (
    <div className={className} style={style}>
      <GeneralButton
        to={`${url}/${paramCase(name)}`}
        text={name}
        onClick={toggleMap}
        className="map-label-button"
      />
      <svg
        viewBox="0 0 100 100"
        height="10vw"
        width="10vw"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="label-svg"
      >
        <polyline
          className="pointer"
          points={"50,0 30,100"}
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
