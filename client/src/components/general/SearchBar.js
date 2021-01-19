import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  /** The string that the user is typing into the search bar. */
  value: PropTypes.string,
  /** An action that is executed every key press. */
  handleChange: PropTypes.func.isRequired,
  /** Text that is displayed before the user enters input. */
  placeholder: PropTypes.string.isRequired,
};
