import React from "react";
import PropTypes from "prop-types";
import MapLabel from "./MapLabel";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image"

const Map = (props) => {
  const mapLabelArray = props.data.rapids
    .filter((x) => Object.keys(x.mapLabel).length !== 0)
    .map((element, key) => (
      <MapLabel
        url={props.url}
        name={element.name}
        mapLabel={element.mapLabel}
        toggleMap={props.toggleMap}
        setting={props.setting}
        selectRapid={props.selectRapid}
        key={`mapLabel${key}`}
      />
    ));

  return (

    <Modal dialogClassName="map" show={props.mapIsShowing} onHide={props.toggleMap} centered>
      <Image
        className="overview-map"
        src={`/api/image/${props.data.overviewMap}`}
        alt="River Map"
        rounded
        fluid
      />

      <div className="map-label-array">{mapLabelArray}</div>
    </Modal>
  );
};

export default Map;

Map.propTypes = {
  global: PropTypes.object,
  mapLabel: PropTypes.array,
  toggleSetting: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
