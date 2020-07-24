import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Map.css";
import MapLabel from "./MapLabel";

const Map = (props) => {
  const mapLabelArray = props.data.rapids
    .filter((x) => Object.keys(x.mapLabel).length !== 0)
    .map((element, key) => (
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

      <img
        className="overview-map"
        src={`/api/image/${props.data.overviewMap}`}
        alt="River Map"
      />

      <div className="maplabel-array">{mapLabelArray}</div>
    </div>
  );
};

export default Map;

Map.propTypes = {
  global: PropTypes.object,
  mapLabel: PropTypes.array,
  toggleSetting: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
