import React from "react";
import PropTypes from "prop-types";
import MapLabel from "./MapLabel";

import Image from "react-bootstrap/Image";

/** Map with selectable tags for each rapid that will navigate user to rapid*/

const Map = ({toggleMap, river }) => {
  const mapLabelArray = river.rapids
    .map((rapid, index) => (
      <MapLabel
        name={rapid.name}
        overviewLabel={rapid.overviewLabel}
        toggleMap={toggleMap}
        key={`overviewLabel${index}`}
      />
    ));

  return (
    <>
      <Image
        className="overview-map"
        src={`https://bent-shaft-maps.s3.amazonaws.com/maps/river_W41oYWjV4/section_jswy1FCZu/Overview.jpg`}
        alt="River Map"
        rounded
        fluid
      />

<svg
        viewBox="0 0 160 90"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="label-svg"
      >

        {mapLabelArray}
        </svg>
    </>
  );
};

Map.propTypes = {
  /** Closes Map when clicked */
  toggleMap: PropTypes.func,
  /** River data */
  river: PropTypes.object.isRequired,
};

export default Map;
