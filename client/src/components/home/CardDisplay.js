import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paramCase } from "change-case";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import SearchBar from "../general/SearchBar";

/**
 * Handles data manipulation before presentational component
 * @param {array} rivers - Array of all river data
 */

const RiverCardLogic = ({ rivers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchRiverProps = ["name", "location"];

  const filteredRivers = rivers
    .filter((river) => {
      if (searchQuery.length === 0) return true;
      for (let rivProp of searchRiverProps) {
        if (
          river[rivProp].toUpperCase().indexOf(searchQuery.toUpperCase()) > -1
        )
          return true;
      }
      return false;
    })
    .map((river) => {
      let searchRiverPropsResults = {};
      for (let i = 0; i < searchRiverProps.length; i++) {
        searchRiverPropsResults[searchRiverProps[i]] = river[
          searchRiverProps[i]
        ].replace(new RegExp(searchQuery, "i"), (match) => {
          return `<span id='selected'>${match}</span>`;
        });
      }

      return {
        river: river,
        nameResult: searchRiverPropsResults.name,
        locationResult: searchRiverPropsResults.location,
        classResult: river.class,
      };
    });

  return (
    <RiverCardDisplay
      filteredRivers={filteredRivers}
      handleChange={handleChange}
      searchQuery={searchQuery}
    />
  );
};

/**
 * Displays River Cards
 * Holds search bar and performs search logic
 * @param {array} filteredRivers - dataset of selected rivers and relevant key/value pairs
 * @param {fuuntion} handleChange - function that controls search bar behavior
 * @param {string} searchQuery - value typed by user
 */

const RiverCardDisplay = ({ filteredRivers, handleChange, searchQuery }) => {
  const RiverCards = filteredRivers.map((filteredRiver) => {
    return (
      <Exists
        riverName={filteredRiver.river.name}
        nameResult={filteredRiver.nameResult}
        locationResult={filteredRiver.locationResult}
        classResult={filteredRiver.classResult}
      />
    );
  });

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        value={searchQuery}
        placeholder="Search for a river, town, province or state!"
      />

      {RiverCards.length > 0 ? (
        <CardColumns>{RiverCards}</CardColumns>
      ) : (
        <DoesNotExist />
      )}
    </>
  );
};

/**
 * Card that displays a river
 * @param {string} nameResult - Modified name string with bolded search query
 * @param {string} locationResult - Modified location string with bolded search query
 * @param {string} classResult - Class of the river
 * @param {string} riverName - Name of the river
 */

const Exists = ({ nameResult, locationResult, classResult, riverName }) => {
  return (
    <Link to={`/${paramCase(riverName)}`}>
      <Card body>
        <Card.Title
          id="name"
          dangerouslySetInnerHTML={{ __html: nameResult }}
        ></Card.Title>
        <Card.Text
          id="location"
          dangerouslySetInnerHTML={{ __html: locationResult }}
        ></Card.Text>
        <Card.Text>Class {classResult}</Card.Text>
      </Card>
    </Link>
  );
};

const DoesNotExist = () => {
  return (
    <Card body>
      <Card.Title className="main">
        This river map does not exist...yet.
      </Card.Title>
      <Card.Text className="sub">
        Do you have basic programming skills and you know the river? Building is
        a river map is easy as calling in sick to go paddling. Give it a shot!
      </Card.Text>
    </Card>
  );
};

export default RiverCardLogic;
