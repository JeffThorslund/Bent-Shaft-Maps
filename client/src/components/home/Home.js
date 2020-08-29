import React from "react";
import { Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import CardDisplay from "./CardDisplay";
import Navigation from "../general/Navigation";
import Header from "./Header";

/**
 * Home page displays title, branding, and search interface
 * @param {array} rivers - dataset of all rivers in database
 */

const Home = ({ rivers }) => {
  return (
    <Route>
      <Navigation />
      <Container>
        <Header />
        {rivers && <CardDisplay rivers={rivers} />}
      </Container>
    </Route>
  );
};

export default Home;
