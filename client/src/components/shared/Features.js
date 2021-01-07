import React from "react";
import PropTypes from "prop-types";
import SVG from "./SVG";
import Path from "./Path";

/**
 * Holds all interact-able elements of a rapid. It should make an array of SVG elements to pass down.
 */

const Features = ({
  rapid,
  reducers,
  areHandlesVisible,
}) => {
  return (
    <SVG reducers={reducers}>
      {[
        { features: rapid.lines, featureType: "line" },
        { features: rapid.eddys, featureType: "eddy" },
        //{ features: rapid.hydraulics, featureType: "hydraulic" },
      ].map(({ features, featureType }, typeIndex) =>
        features.map((feature, i) => (
          <Path
            line={feature.vector}
            featureType={featureType}
            typeIndex={typeIndex}
            lineIndex={i}
            reducers={reducers}
            areHandlesVisible={areHandlesVisible}
            key={feature.id}
          />
        ))
      )}
    </SVG>
  );
};

Features.propTypes = {
  /** The current water level */
  level: PropTypes.number.isRequired,
  /** The rapid data object */
  rapid: PropTypes.object.isRequired,
};

export default Features;
