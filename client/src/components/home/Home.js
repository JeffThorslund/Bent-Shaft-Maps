import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Navigation from "../general/Navigation";
import Header from "./Header";
import RiverCardContainer from "./RiverCardContainer";

/**
 * Holds Navigation Bar, Header, and RiverCardContainer
 */

const Home = (props) => {
  return (
    <Route>
      <Navigation />
      <Container>
        <Header />
        <RiverCardContainer {...props} />
      </Container>
    </Route>
  );
};

export default Home;

Home.propTypes = {
  /** Array of all river objects in the database */
  rivers: PropTypes.arrayOf(PropTypes.object),
};
