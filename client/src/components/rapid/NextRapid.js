import React from "react";
import "../../stylesheets/NextRapid.css";
import { paramCase } from "change-case";
import PropTypes from "prop-types";
import findRapidFromId from "../../tools/findRapidFromId";
import GeneralButton from "../general/GeneralButton";

const NextRapid = ({ arrows: { linkId, bottom, right }, url, allData }) => {
  const style = {
    position: "absolute",
    bottom: `${bottom}vh`,
    right: `${right}vw`,
  };

  const nextRapidName = findRapidFromId(linkId, allData).name;

  return (
    <GeneralButton
      to={`${url}/${paramCase(nextRapidName)}`}
      text={nextRapidName}
      style={style}
      variant="dark"
    />
  );
};

export default NextRapid;

NextRapid.propTypes = {
  arrows: PropTypes.exact({
    id: PropTypes.string.isRequired,
    linkId: PropTypes.string.isRequired,
    bottom: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};
