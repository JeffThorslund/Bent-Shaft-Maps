import React from "react";
import PropTypes from "prop-types";
import "./Map.css";
import MapLabel from "./MapLabel";
import Overview from "./basemaps/Overview.png";

const Map = (props) => {
  const mapLabelArray = props.mapLabel.map((element, key) => (
    <MapLabel
      name={element.name}
      mapLabel={element.mapLabel}
      toggleMap={props.toggleMap}
      selectRapid={props.selectRapid}
      key={`mapLabel${key}`}
    />
  ));

  return (
    <div className="Map">
      <div className="maplabel-array">{mapLabelArray}</div>
      <img id="overview" src={Overview} alt="Italian Trulli" />
    </div>
  );
};

export default Map;

Map.propTypes = {
  mapLabel: PropTypes.array,
  toggleMap: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
