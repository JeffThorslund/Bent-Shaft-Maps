import React, { useState } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import SearchBar from '../general/SearchBar';
import RiverCard from './RiverCard';
import DoesNotExistCard from './DoesNotExistCard';

/* Handles search functionality and river card display */

const RiverCardContainer = ({ rivers }) => {
  // User Search Query
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // Getting data from { rivers } for Card rendering and Search engine
  const riverCardData = rivers
    .map((river) =>
      river.sections.map((section) => ({
        riverName: river.name,
        sectionName: section.name,
        locationName: section.location,
        className: section.class,
      }))
    )
    .flat();

  const riverCards = riverCardData
    .filter((card) => {
      // If Search Bar is empty => all Cards
      if (value.length === 0) return true;
      // Iterrate through each Card values => Cards containing Search Query
      for (const result of Object.values(card)) {
        if (result.toUpperCase().indexOf(value.toUpperCase()) > -1) return true;
      }

      return false;
    })
    .map((card, index) => (
      <RiverCard {...card} value={value} key={`RiverCard${index}`} />
    ));

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        value={value}
        placeholder="Search for a river, town, province or state!"
      />
      {riverCards !== null && riverCards.length > 0 ? (
        <CardColumns>{riverCards}</CardColumns>
      ) : (
        <DoesNotExistCard />
      )}
    </>
  );
};

export default RiverCardContainer;
