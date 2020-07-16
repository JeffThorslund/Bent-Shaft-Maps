import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Exists, DoesNotExist } from "./RiverCards";
import "./Global.css";

const CardDisplay = ({ rivers }) => {
  /**
   * Displays River Cards
   * Holds search bar and performs search logic
   * @param {array} rivers - dataset of all rivers in database
   */

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //river properties to be searched
  let searchRiverProps = ["name", "location"];

  //create an array of rivers to be displayed in search
  const filteredRivers = rivers
    .filter((river) => {
      //if no use input, display all rivers
      if (value.length == 0) return true;

      //iterate through searchRiverProps of a river until match
      for (let rivProp of searchRiverProps) {
        if (river[rivProp].toUpperCase().indexOf(value.toUpperCase()) > -1)
          return true;
      }

      //if these conditions are not met, return false
      return false;
    })
    .map((river) => {
      //storage for results
      let searchRiverPropsResults = [];

      //interate through all given props
      for (let i = 0; i < searchRiverProps.length; i++) {
        //find instances of value and highlight them
        searchRiverPropsResults[i] = river[searchRiverProps[i]].replace(
          new RegExp(value, "i"),
          (match) => {
            return `<div id='selected'>${match}</div>`;
          }
        );
      }

      //find correct prop to be passed down
      const propIndexFinder = (prop) => {
        return searchRiverPropsResults[searchRiverProps.indexOf(prop)];
      };

      return (
        <Exists
          elem={river}
          nameResult={propIndexFinder("name")}
          locationResult={propIndexFinder("location")}
        />
      );
    });

  return (
    <>
      <SearchBar handleChange={handleChange} value={value} />

      <div className="river-wrapper">
        {filteredRivers.length > 0 ? filteredRivers : <DoesNotExist />}
      </div>
    </>
  );
};

export default CardDisplay;
