import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Alerts user to flip phone sideways.
 */

const MobileAlert = () => (
  <Container
    className="d-flex justify-content-center align-items-center text-center"
    style={{ height: '100vh' }}
  >
    <Row>
      <Col>
        <h1>Flip your phone sideways for the best viewing experience.</h1>
      </Col>
    </Row>
  </Container>
);

export default MobileAlert;
