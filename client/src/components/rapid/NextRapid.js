import React from "react";
import { paramCase } from "change-case";
import PropTypes from "prop-types";

import findRapidFromId from "./_utils/findRapidFromId";
import GeneralButton from "../general/GeneralButton";

/**
 * Button to navigate to a connected rapid in the river.
 */

const NextRapid = ({ linkId, bottom, right, river }) => {
  const style = {
    position: "absolute",
    bottom: `${bottom}vh`,
    right: `${right}vw`,
  };

  const nextRapidName = findRapidFromId(linkId, river).name;

  return (
    <GeneralButton
      to={`${paramCase(nextRapidName)}`}
      text={nextRapidName}
      style={style}
      variant="dark"
    />
  );
};

NextRapid.propTypes = {
  /** The id of the connecting rapid */
  linkId: PropTypes.string.isRequired,
  /** The absolute position of the tab from the bottom of the viewport */
  bottom: PropTypes.number.isRequired,
  /** The absolute position of the tab from the right of the viewport */
  right: PropTypes.number.isRequired,
};

export default NextRapid;
