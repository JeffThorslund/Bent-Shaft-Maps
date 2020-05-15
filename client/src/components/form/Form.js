import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";

const axios = require("axios");

export class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      river: null,
      rapid: null,
      feature: null,
    };
  }

  //Sets selection to state.
  handleSelect = (type, element) => {
    this.state[type] === element
      ? this.setState({
          [type]: null,
        })
      : this.setState({
          [type]: element,
        });
  };

  render() {
    //an array of rendered containers.
    let containerArr = [];

    //creates a container of all the rivers.
    const riverArray = this.props.dataArr;
    containerArr.push(
      <Container
        arr={riverArray}
        name="riverName"
        type="river"
        handleSelect={this.handleSelect}
        selected={this.state.river}
      />
    );

    //if th
    if (this.state.river) {
      const riverIndex = riverArray.findIndex((elem) => {
        return elem.riverName === this.state.river;
      });
      const rapidArray = riverArray[riverIndex].rapids;

      containerArr.push(
        <Container
          arr={rapidArray}
          name="name"
          type="rapid"
          handleSelect={this.handleSelect}
          selected={this.state.rapid}
        />
      );
      if (this.state.rapid) {
        const features = ["hydraulics", "eddys", "lines", "arrows"];
        const rapidIndex = rapidArray.findIndex((elem) => {
          return elem.name === this.state.rapid;
        });
        console.log(rapidArray[rapidIndex].hydraulics);
        const featureArray = features.map((elem, index) => {
          let arr = rapidArray[rapidIndex][elem];
          return (
            <Container
              arr={arr}
              name="name"
              type={elem}
              handleClick={() => {}}
              selected="test"
              key={`feature${index}`}
            />
          );
        });

        containerArr = containerArr.concat(featureArray);
      }
    }
    return (
      <div className="form">
        <h1>Welcome to the River Editor!</h1>
        <h2>State</h2>
        <div>{this.state.river}</div>
        <div>{this.state.rapid}</div>

        {containerArr}
      </div>
    );
  }
}

export default form;
