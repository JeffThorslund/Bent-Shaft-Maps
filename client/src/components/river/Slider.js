import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

/** Adjusts and displays the water level of the river */

const Slider = ({ min, max, units, level, setLevel }) => {
  return (
    <Form className="d-flex">
      <Form.Label class="range-value">
        <span>{level}</span>
        <span>{units}</span>
      </Form.Label>
      <Form.Control
        className="custom-range pl-2"
        type="range"
        min={min}
        max={max}
        value={level}
        step={1}
        orient="vertical"
        onChange={(e) => setLevel(e.target.value)}
      />
    </Form>
  );
};

Slider.propTypes = {
  /** The lowest selectable value of the slider */
  min: PropTypes.number.isRequired,
  /** The highest selectable value of the slider */
  max: PropTypes.number.isRequired,
  /** The unit of measurement */
  units: PropTypes.string.isRequired,
  /** The current water level */
  level: PropTypes.number.isRequired,
  /** Sets the changed water level */
  setLevel: PropTypes.func.isRequired,
};

export default Slider;
