import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";

import Navigation from "../general/Navigation";
import Header from "./Header";
import RiverCardContainer from "./RiverCardContainer";

/**
 * Holds Navigation Bar, Header, and RiverCardContainer
 */

const Home = ({ rivers }) => (
  <div className="vh-100 home">
    <Navigation />
    <Container>
      <Header />
      <RiverCardContainer rivers={rivers} />
    </Container>
  </div>
);

Home.propTypes = {
  /** Array of all river objects in the database */
  rivers: PropTypes.arrayOf(PropTypes.object),
};

export default Home;
