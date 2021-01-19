import React from 'react';
import PropTypes from 'prop-types';
import { paramCase } from 'change-case';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import InfoCard from './InfoCard';
import GeneralButton from '../general/GeneralButton';

/** Introduction page that is visited before redirection to the first rapid of the river. */

const Introduction = ({ river, url }) => {
  console.log(river);
  const infoCardsConfig = [
    {
      id: 'desc',
      title: 'Info',
    },
    {
      id: 'access',
      title: 'Access',
    },
  ];

  const InfoCards = infoCardsConfig.map((card, index) => (
    <InfoCard title={card.title} body={river[card.id]} key={(card.id, index)} />
  ));

  return (
    <Container fluid className="introduction vh-100 d-flex flex-column">
      <Row className="justify-content-center header p-2">
        <Col className="d-flex flex-column align-items-center">
          <h1 className="text-center">
            Welcome to the <br />
            {river.name}
          </h1>
          <GeneralButton
            to={`${url}/${paramCase(river.rapids[0].name)}`}
            text="Click to Continue"
            className="introduction-continue-button m-2"
          />
        </Col>
      </Row>
      <Row className="footer flex-grow-1">
        <div>
          <CardColumns className="p-2">{InfoCards}</CardColumns>
        </div>
      </Row>
    </Container>
  );
};

Introduction.propTypes = {
  /** River object containing all river data of a specific river */
  river: PropTypes.object.isRequired,
  /** Url to be used for routing redirection to river */
  url: PropTypes.string.isRequired,
};

export default Introduction;
