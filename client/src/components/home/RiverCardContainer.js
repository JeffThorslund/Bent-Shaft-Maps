import React, { useState } from "react";
import PropTypes from "prop-types";
import CardColumns from "react-bootstrap/CardColumns";
import SearchBar from "../general/SearchBar";
import RiverCard from "./RiverCard";
import DoesNotExistCard from "./DoesNotExistCard";

//REDUX
import { useSelector } from "react-redux";

/**
 * Handles search functionality and river card display.
 */

const RiverCardContainer = ({ rivers }) => {
  //User Search Query
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  let riverCardData = rivers
    .map((river) => {
      return river.sections.map((section) => ({
        riverName: river.name,
        sectionName: section.name,
        locationName: section.location,
        className: section.class,
      }));
    })
    .flat();

  let riverCards = riverCardData
    .filter((card) => {
      if (value.length === 0) return true;

      for (const [key, result] of Object.entries(card)) {
        if (result.toUpperCase().indexOf(value.toUpperCase()) > -1) return true;
      }

      return false;
    })
    .map((card, index) => {
      return <RiverCard {...card} value={value} key={`RiverCard${index}`} />;
    });

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

RiverCardContainer.propTypes = {
  /** Array of all river objects in the database */
  rivers: PropTypes.arrayOf(PropTypes.object),
};
