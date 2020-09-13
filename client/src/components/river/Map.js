import React from "react";
import PropTypes from "prop-types";
import MapLabel from "./MapLabel";

import Image from "react-bootstrap/Image";

/** Map with selectable tags for each rapid that will navigate user to rapid*/

const Map = ({ url, toggleMap, river }) => {
  const mapLabelArray = river.rapids
    //What does this do?
    .filter((rapid) => Object.keys(rapid.mapLabel).length !== 0)
    .map((rapid, index) => (
      <MapLabel
        url={url}
        name={rapid.name}
        mapLabel={rapid.mapLabel}
        toggleMap={toggleMap}
        key={`mapLabel${index}`}
      />
    ));

  return (
    <>
      <Image
        className="overview-map"
        src={`/api/image/${river.overviewMap}`}
        alt="River Map"
        rounded
        fluid
      />
      <div className="map-label-array">{mapLabelArray}</div>
    </>
  );
};

Map.propTypes = {
  /** Url to match. This is how rapid is identified. */
  url: PropTypes.string.isRequired,
  /** Closes Map when clicked */
  toggleMap: PropTypes.func,
  /** River data */
  river: PropTypes.object.isRequired,
};

export default Map;
