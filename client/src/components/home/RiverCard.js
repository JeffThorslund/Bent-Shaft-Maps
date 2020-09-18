import React from "react";
import { Link } from "react-router-dom";
import { paramCase } from "change-case";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

/**
 * A component that displays river name, location and class. On click, links to that river.
 */

const RiverCard = ({ nameResult, locationResult, classResult, riverName }) => {
  return (
    <Link to={`/${paramCase(riverName)}`}>
      <Card className="p-3 river-card">
        <Card.Title
          id="name"
          dangerouslySetInnerHTML={{ __html: nameResult }}
        />
        <Card.Subtitle
          id="location"
          dangerouslySetInnerHTML={{ __html: locationResult }}
          className="pb-2"
        />
        <Card.Subtitle>Class {classResult}</Card.Subtitle>
      </Card>
    </Link>
  );
};

export default RiverCard;

RiverCard.propTypes = {
  /** Name of river with a nested <span/> containing the matching search query substring. */
  nameResult: PropTypes.string,
  /** Location of river with a nested <span/> containing the matching search query substring. */
  locationResult: PropTypes.string,
  /** Class of river with a nested <span/> containing the matching search query substring. */
  classResult: PropTypes.string,
  /** The name of the river, used for linking purposes. */
  riverName: PropTypes.string,
};
