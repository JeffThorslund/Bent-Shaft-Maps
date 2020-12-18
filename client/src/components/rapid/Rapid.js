import React from "react";
import PropTypes from "prop-types";

import Image from "react-bootstrap/Image";

import NextRapid from "./NextRapid";
import Features from "./Features";
import RapidHeader from "./RapidHeader";

/**
 * The Rapid container that holds all components related to an individual rapid
 */

const Rapid = ({ rapid, river, level }) => {
  const arrowArray = rapid.arrows.map((arrow, key) => (
    <NextRapid
      linkId={arrow.linkId}
      bottom={arrow.bottom}
      right={arrow.right}
      key={`arrow${key}`}
      river={river}
    />
  ));

  return (
    <div className="Rapid">
      <Image
        className="basemap"
        src={`https://bent-shaft-maps.s3.amazonaws.com/maps/river_W41oYWjV4/section_jswy1FCZu/${rapid.id}.jpg`}
        alt="River Map"
      />
      <Features level={level} rapid={rapid} />
      <RapidHeader name={rapid.name} description={rapid.desc} />
      <div id="arrow-array"> {arrowArray} </div>
    </div>
  );
};

Rapid.propTypes = {
  /** The river data object */
  river: PropTypes.object.isRequired,
  /** A single rapid object */
  rapid: PropTypes.object.isRequired,
  /** The current water level */
  level: PropTypes.number.isRequired,
};

export default Rapid;
