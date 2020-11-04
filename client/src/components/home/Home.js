import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../general/Navigation";
import Header from "./Header";
import RiverCardContainer from "./RiverCardContainer";

/**
 * Holds Navigation Bar, Header, and RiverCardContainer
 */

const Home = () => (
  <div className="vh-100 home">
    <Navigation />
    <Container>
      <Header />
      <RiverCardContainer />
    </Container>
  </div>
);

export default Home;
