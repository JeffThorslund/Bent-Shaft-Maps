import React from 'react';
import Form from 'react-bootstrap/Form';

/**
 * Generic search bar component used for any searching/filtering functionality.
 */

const SearchBar = ({ value, handleChange, placeholder }) => (
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

export default SearchBar;
