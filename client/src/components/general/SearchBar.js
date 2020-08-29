import React from "react";
import Form from "react-bootstrap/Form";

/**
 * Generic search bar component
 * @param {string} value - User search input 
 * @param {function} handleChange - Behaviour on user key press
 * @param {string} placeholder - Text shown by default in search bar 
 */

const SearchBar = ({ value, handleChange, placeholder }) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group controlId="search-bar">
        <Form.Control
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
