import React, { useState } from "react";
import PropTypes from "prop-types";
import CardColumns from "react-bootstrap/CardColumns";
import SearchBar from "../general/SearchBar";
import RiverCard from "./RiverCard";
import DoesNotExistCard from "./DoesNotExistCard";

/**
 * Handles search functionality and river card display.
 */

const RiverCardContainer = ({ rivers }) => {
  //User Search Query
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  let riverCardData =
    rivers &&
    rivers
      .map((river) => {
        return river.sections.map((section) => {
          return {
            riverName: river.name,
            sectionName: section.section,
            locationName: section.location,
            className: section.class,
          };
        });
      })
      .flat();

  let RiverCards = riverCardData
    ? riverCardData
        .filter((card) => {
          if (value.length === 0) return true;

          for (const [key, result] of Object.entries(card)) {
            if (result.toUpperCase().indexOf(value.toUpperCase()) > -1)
              return true;
          }

          return false;
        })
        .map((card, index) => {
          return (
            <RiverCard {...card} value={value} key={`RiverCard${index}`} />
          );
        })
    : null;

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        value={value}
        placeholder="Search for a river, town, province or state!"
      />
      {RiverCards !== null && RiverCards.length > 0 ? (
        <CardColumns>{RiverCards}</CardColumns>
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
