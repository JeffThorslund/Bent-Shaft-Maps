import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <form>
      <input
        type="text"
        className="searchbar"
        value={props.value}
        placeholder="Search for a river, town, province or state!"
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchBar;
