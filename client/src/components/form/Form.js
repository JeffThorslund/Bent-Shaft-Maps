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

  choosePath = (id, element) => {
    this.state[id] === element
      ? this.setState({
          [id]: null,
        })
      : this.setState({
          [id]: element,
        });
  };

  render() {
    let containerArr = []; //an array of rendered containers.

    const riverArray = this.props.dataArr;
    containerArr.push(
      <Container
        arr={riverArray}
        name="riverName"
        id="river"
        handleClick={this.choosePath}
      />
    );

    if (this.state.river) {
      const riverIndex = riverArray.findIndex((elem) => {
        return elem.riverName === this.state.river;
      });
      const rapidArray = riverArray[riverIndex].rapids;

      containerArr.push(
        <Container
          arr={rapidArray}
          name="name"
          id="rapid"
          handleClick={this.choosePath}
        />
      );
      if (this.state.rapid) {
        const features = ["hydraulics", "eddys", "lines", "arrows"];
        const rapidIndex = rapidArray.findIndex((elem) => {
          return elem.name === this.state.rapid;
        });
        console.log(rapidArray[rapidIndex].hydraulics);
        const featureArray = features.map((elem) => {
          let arr = rapidArray[rapidIndex][elem];
          return (
            <Container arr={arr} name="name" id={elem} handleClick={() => {}} />
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
