import React from 'react';
import { Link } from 'react-router-dom';
import { paramCase } from 'change-case';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

/**
 * A component that displays river name, location and class. On click, links to that river.
 */

const RiverCard = ({
  riverName,
  sectionName,
  locationName,
  className,
  value,
}) => {
  const highlightValue = (name, value) =>
    name.replace(
      new RegExp(value, 'i'),
      (match) => `<span id='selected'>${match}</span>`
    );

  return (
    <Link to={`maps/${paramCase(riverName)}/${paramCase(sectionName)}`}>
      <Card className="px-3 py-2 river-card">
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: highlightValue(riverName, value),
          }}
        />

        <Card.Subtitle
          dangerouslySetInnerHTML={{
            __html: highlightValue(sectionName, value),
          }}
          className="pb-1"
        />
        <Card.Subtitle
          dangerouslySetInnerHTML={{
            __html: highlightValue(locationName, value),
          }}
          className="pb-1"
        />
        <Card.Subtitle
          dangerouslySetInnerHTML={{
            __html: `Class ${highlightValue(className, value)}`,
          }}
          className="pb-1"
        />
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
