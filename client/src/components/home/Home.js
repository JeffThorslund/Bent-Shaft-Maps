import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from '../general/Navigation';
import Header from './Header';
import RiverCardContainer from './RiverCardContainer';

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

export default Home;
