import React from 'react';
import Card from 'react-bootstrap/Card';

/**
 * Displays when user enters a search query that does not match any rivers.
 */

const DoesNotExistCard = () => (
  <Card body className="river-card">
    <Card.Title className="main">This River Does Not Exist!</Card.Title>
    <Card.Text className="sub">
      You will be able to create a river yourself. Stay tuned!
    </Card.Text>
  </Card>
);

export default DoesNotExistCard;
