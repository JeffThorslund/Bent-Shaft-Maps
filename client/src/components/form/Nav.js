import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";

const axios = require("axios");

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //an array of rendered containers.
    let containerArr = [];

    //creates a container of all the rivers.
    const riverArray = this.props.dataArr;
    containerArr.push(
      <Container
        arr={riverArray}
        name="riverName" //name property in data.json
        type="river"
        handleSelect={this.props.handleSelect}
        selected={this.props.river}
        key="river_key"
      />
    );

    //if a river is selected, show an array of possible rapids
    if (this.props.river !== null) {
      const riverIndex = riverArray.findIndex((elem) => {
        return elem.riverName === this.props.river;
      });
      const rapidArray = riverArray[riverIndex].rapids;

      containerArr.push(
        <Container
          arr={rapidArray}
          name="name" //name property in data.json
          type="rapid"
          handleSelect={this.props.handleSelect}
          selected={this.props.rapid}
          key="rapid_key"
        />
      );

      //if a rapid is selected, show an array of possible features
      if (this.props.rapid !== null) {
        const features = ["hydraulics", "eddys", "lines", "arrows"];
        const rapidIndex = rapidArray.findIndex((elem) => {
          return elem.name === this.props.rapid;
        });

        //creates a container for each feature type
        const featureArray = features.map((elem, index) => {
          let arr = rapidArray[rapidIndex][elem];
          return (
            <Container
              arr={arr}
              name="name"
              type={elem}
              handleSelect={this.props.handleFeatureSelect}
              handleAddNewFeature={this.props.handleAddNewFeature}
              selected={this.props.feature}
              key={`feature_key_${index}`}
            />
          );
        });

        //add the feature containers to the container array.
        containerArr = containerArr.concat(featureArray);
      }
    }
    return (
      <div className="form">
        <h2>State</h2>
        <div>river: {this.props.river}</div>
        <div>rapid: {this.props.rapid}</div>
        <div>feature: {this.props.feature}</div>

        {containerArr}
      </div>
    );
  }
}

export default Nav;
