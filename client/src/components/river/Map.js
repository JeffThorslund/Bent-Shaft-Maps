import React from "react";
import loadable from '@loadable/component'
import PropTypes from "prop-types";
import "./Map.css";
import MapLabel from "./MapLabel";
import { paramCase } from "change-case";

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

  let name = paramCase(props.data.name);
  const OverviewMap = loadable(() =>
    import(`../../river-data/${name}/maps/OverviewMap`)
  );

  return (
      <div className="Map">
        <div
          className="fade"
          onClick={() => {
            props.toggleSetting(props.setting);
          }}
        ></div>

        <div className="overview-map">
          <OverviewMap />
        </div>
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
