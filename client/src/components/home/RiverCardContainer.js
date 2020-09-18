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

  //Terms that will be searched
  const searchRiverProps = ["name", "location"];

  let RiverCards =
    rivers &&
    //Remove rivers that do not match search query
    rivers
      .filter((river) => {
        if (value.length === 0) return true;
        for (let searchRiverProp of searchRiverProps) {
          if (
            river[searchRiverProp].toUpperCase().indexOf(value.toUpperCase()) >
            -1
          )
            return true;
        }
        return false;
      })
      //Replace search query with bold span
      .map((river, index) => {
        let substrings = {};
        for (let i = 0; i < searchRiverProps.length; i++) {
          substrings[searchRiverProps[i]] = river[searchRiverProps[i]].replace(
            new RegExp(value, "i"),
            (match) => {
              return `<span id='selected'>${match}</span>`;
            }
          );
        }

        return (
          <RiverCard
            riverName={river.name}
            classResult={river.class}
            nameResult={substrings.name}
            locationResult={substrings.location}
            key={`${(river.name, index)}`}
          />
        );
      });

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
