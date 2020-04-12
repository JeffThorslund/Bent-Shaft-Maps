import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Slider.css";
import Slider from "react-rangeslider";

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0,
    };
  }

  handleChange = (value) => {
    this.props.selectLevel(value);
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="slider">
        <Slider
          min={0}
          max={12}
          value={value}
          step={1}
          tooltip={false}
          orientation="vertical"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Vertical;

Vertical.propTypes = {
  selectLevel: PropTypes.func,
};
