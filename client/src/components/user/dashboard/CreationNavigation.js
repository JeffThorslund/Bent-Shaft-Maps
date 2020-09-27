import React from "react";
import PropTypes from "prop-types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const CreationNavigation = ({}) => {
  const config = ["River", "Section", "Rapid", "Map Labels"];

  return (
    <ButtonGroup className="w-100">
      {config.map((label, i) => {
        return (
          <Button variant="outline-secondary" key={i}>
            {i + 1}. {label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

CreationNavigation.propTypes = {};

export default CreationNavigation;
