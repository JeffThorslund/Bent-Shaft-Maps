import React from "react";
import GeneralButton from "../general/GeneralButton";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import { paramCase } from "change-case";

const ImageCache = require("react-preload").ImageCache;

const Introduction = ({ river, url }) => {
  let contributors = river.contributors.toString();

  ImageCache.add(`/api/image/${river.rapids[0].riverMap}`);

  return (
    <Container fluid className="introduction">
      <Row className="justify-content-center header">
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
      <Row className="footer">
        <Card>
          <Card.Title className="title">Info</Card.Title>
          <Card.Body>{river.info}</Card.Body>
        </Card>

        <Card className="child" id="access">
          <Card.Title className="title">Access</Card.Title>
          <Card.Body>{river.desc}</Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Introduction;

{
  /*
<div className="footer">
  <div className="footer-grid-wrapper">

    {river.contributors.length > 0 && (
      <div className="child" id="contributors">
        <div className="title">Contributors</div>
        <div>{contributors}</div>
      </div>
    )}

    {river.sponsors[0].logo.length > 0 && (
      <div className="child" id="logos">
        <div className="title">Brought to you by...</div>
        <a
          href={river.sponsors[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require(`../../assets/TrestleLogo.png`)}
            alt={`Trestle Logo`}
            width="100%"
          />
        </a>
      </div>
    )}
    <div className="child" id="access">
      <div className="title">Access</div>
      <div>{river.desc}</div>
    </div>
    <a
      href={river.putIn}
      className="child access-link"
      id="putin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="title">Directions to Put In</div>
    </a>
    <a
      href={river.takeOut}
      className="child access-link"
      id="takeout"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="title">Directions to Take Out</div>
    </a>
  </div>
</div>
</div> */
}
