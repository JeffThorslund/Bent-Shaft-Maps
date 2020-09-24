import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

/** A card that displays information on the introduction page. */

const InfoCard = ({ title, body, link }) => {
  return (
    <Card body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
      {link && (
        <Card.Link href={link} target="_blank" rel="noopener noreferrer">
          Main Put In
        </Card.Link>
      )}
    </Card>
  );
};

InfoCard.propTypes = {
  /** Title of the card */
  title: PropTypes.string.isRequired,
  /** Body of the card */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default InfoCard;
