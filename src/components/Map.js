import React from "react";
import PropTypes from "prop-types";
import "./Map.css";
import MapLabel from "./MapLabel";
import OverviewMap from "./VectorAssets/Basemaps/OverviewMap";

const Map = (props) => {
  const mapLabelArray = props.mapLabel.map((element, key) => (
    <MapLabel
      url={props.url}
      name={element.name}
      mapLabel={element.mapLabel}
      toggleSetting={props.toggleSetting}
      setting={props.setting}
      selectRapid={props.selectRapid}
      key={`mapLabel${key}`}
    />
  ));

  return (
    <div className="Map">
      <div
        className="fade"
        onClick={() => {
          props.toggleSetting(props.setting);
        }}
      ></div>

      <div className="overview-map">{OverviewMap}</div>
      <div className="maplabel-array">{mapLabelArray}</div>
    </div>
  );
};

export default Map;

Map.propTypes = {
  mapLabel: PropTypes.array,
  toggleSetting: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
