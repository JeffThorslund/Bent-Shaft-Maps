import React, { Component } from "react";
import Slider from "react-rangeslider";
import "./Slider.css";

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10
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
        <div className="value">{value}</div>

        <Slider
          min={-5}
          max={14}
          value={value}
          step={1}
          orientation="vertical"
          //labels={{0: 'Low', 5: 'Medium', 10: 'High'}}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default Vertical;
