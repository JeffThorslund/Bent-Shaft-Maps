import React from "react";
import MapLabel from "./MapLabel";

import "./Map.css";
import Overview from "./basemaps/Overview.png";
import PropTypes from "prop-types";
import Data from "../Data";

const Map = props => {
  const mapToggle = map => {//This could be moved to App. Also poorly named
    let style;
    if (map) {
      style = {
        display: "block"
      };
    } else if (!map) {
      style = {
        display: "none"
      };
    } else {
      console.log("error");
    }

    return style;
  };

  

  const mapLabelArray = [];
  for (let i = 0; i < Data.length; i++) {
    mapLabelArray.push(<MapLabel
    name={Data[i].name}
    top={Data[i].mapLabel.titleTop}
    left={Data[i].mapLabel.titleLeft}
    pointer={Data[i].mapLabel.pointerCoordinates}
    selectRapid={props.selectRapid}
    toggleMap={props.toggleMap}
    key={i} />);
  }

  return (
    <div className="Map" style={mapToggle(props.map)}>
      <div className="maplabel-array">{mapLabelArray}</div>
      <img id="overview" src={Overview} alt="Italian Trulli" />
    </div>
  );
};

export default Map;

Map.propTypes = {
  map: PropTypes.bool
};
