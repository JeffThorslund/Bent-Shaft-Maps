import React, { Component } from "react";
import Container from "./Container";
const axios = require("axios");

export class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      river: "Ottawa River",
      rapid: "McCoys Chute",
      feature: null,
    };
  }

  render() {
    const riverArray = this.props.dataArr;
    console.log(riverArray);

    const riverIndex = riverArray.findIndex((elem) => {
      return elem.riverName === this.state.river;
    });
    console.log(riverIndex);

    const rapidArray = riverArray[riverIndex].rapids;

    console.log(rapidArray);
    const rapidIndex = rapidArray.findIndex((elem) => {
      return elem.name === this.state.rapid;
    });

    const features = ["hydraulics", "eddys", "lines", "arrows"];
    console.log(rapidArray[rapidIndex].hydraulics);
    const featureArrays = features.map((elem) => {
      let arr = rapidArray[rapidIndex][elem];
      return <Container arr={arr} name="name" id={elem} />;
    });

    return (
      <div>
        <h1>Welcome to the River Editor!</h1>
        <h2>State</h2>
        <div>{this.state.river}</div>
        <div>{this.state.rapid}</div>
        <Container arr={riverArray} name="riverName" id="rivers" />
        <Container arr={rapidArray} name="name" id="rapids" />
        {featureArrays}
      </div>
    );
  }
}

export default form;
