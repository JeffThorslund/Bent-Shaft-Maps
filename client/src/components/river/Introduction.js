import React from "react";
import PropTypes from "prop-types";
import { paramCase } from "change-case";

import GeneralButton from "../general/GeneralButton";
import InfoCard from "./InfoCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ImageCache = require("react-preload").ImageCache;

/** Introduction page that is visited before redirection to the first rapid of the river. */

const Introduction = ({ river, url }) => {
  ImageCache.add(`/api/image/${river.rapids[0].riverMap}`);

  const infoCardsConfig = [
    {
      id: "desc",
      title: "Info",
    },
    {
      id: "access",
      title: "Access",
    },
  ];

  const InfoCards = infoCardsConfig.map((card, index) => {
    return (
      <InfoCard
        title={card.title}
        body={river[card.id]}
        key={(card.id, index)}
      />
    );
  });

  return (
    <Container fluid className="introduction">
      <Row className="justify-content-center header p-2">
        <Col className="d-flex flex-column align-items-center">
          <h1 className="text-center">
            Welcome to the <br />
            {river.name}
          </h1>
          <GeneralButton
            to={`${url}/${paramCase(river.rapids[0].name)}`}
            text="Click to Continue"
          />
        </Col>
      </Row>
      <Row className="footer">{InfoCards}</Row>
    </Container>
  );
};

Introduction.propTypes = {
  /** River object containing all river data of a specific river */
  river: PropTypes.object.isRequired,
  /** Url to be used for routing redirection to river*/
  url: PropTypes.string.isRequired,
};

export default Introduction;
