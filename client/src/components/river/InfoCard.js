import React from 'react';
import Card from 'react-bootstrap/Card';

/** A card that displays information on the introduction page. */

const InfoCard = ({ title, body, link }) => (
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

export default InfoCard;
