import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "react-rangeslider";
import "./Slider.css";

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.props.selectLevel(value);
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div className="slider">
        <div className="value">Level: {value}"</div>

        <Slider
          min={0}
          max={12}
          value={value}
          step={1}
          tooltip={false}
          orientation="vertical"
          //labels={{0: 'Boney', 5: 'Prime', 12: 'Flooded'}}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />

        <div></div>
      </div>
    );
  }
}

export default Vertical;

Slider.propTypes = {
  selectLevel: PropTypes.func
};
