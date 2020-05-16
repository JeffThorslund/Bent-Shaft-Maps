import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";
import InputArea from "./InputArea";

const axios = require("axios");

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      river: null,
      rapid: null,
      feature: null,
    };
  }

  //Sets selection of river and rapid. //Could split into 2 methods for easier logic readability
  handleSelect = (type, element) => {
    this.state[type] === element
      ? this.setState({
          [type]: null,
          feature: null,
        })
      : this.setState({
          [type]: element,
          feature: null,
        });

    if (type === "river") {
      this.setState({
        rapid: null,
        feature: null,
      });
    }
  };

  //Sets selection of feature or other.
  handleFeatureSelect = (type, element) => {
    this.state.feature === element
      ? this.setState({
          feature: null,
        })
      : this.setState({
          feature: element,
        });
  };

  //Add new
  handleAddNewFeature = () => {
    this.setState({
      feature: null,
    });
  };

  render() {
    const { dataArr } = this.props;

    //an array of rendered containers.
    let containerArr = [];

    //creates a container of all the rivers.
    containerArr.push(
      <Container
        arr={dataArr}
        name="riverName" //name property in data.json
        type="river"
        handleSelect={this.handleSelect}
        selected={this.state.river}
        key="river_key"
      />
    );

    //if a river is selected, show an array of possible rapids
    if (this.state.river !== null) {
      const riverIndex = dataArr.findIndex((elem) => {
        return elem.riverName === this.state.river;
      });
      const rapidArray = dataArr[riverIndex].rapids;

      containerArr.push(
        <Container
          arr={rapidArray}
          name="name" //name property in data.json
          type="rapid"
          handleSelect={this.handleSelect}
          selected={this.state.rapid}
          key="rapid_key"
        />
      );

      //if a rapid is selected, show an array of possible features
      if (this.state.rapid !== null) {
        const features = ["hydraulics", "eddys", "lines", "arrows"];
        const rapidIndex = rapidArray.findIndex((elem) => {
          return elem.name === this.state.rapid;
        });

        //creates a container for each feature type
        const featureArray = features.map((elem, index) => {
          let arr = rapidArray[rapidIndex][elem];
          return (
            <Container
              arr={arr}
              name="name"
              type={elem}
              handleSelect={this.handleFeatureSelect}
              handleAddNewFeature={this.handleAddNewFeature}
              selected={this.state.feature}
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
        {/*<h2>State</h2>
        <div>river: {river}</div>
        <div>rapid: {rapid}</div>
        <div>feature: {feature}</div>*/}
        <div className="containers">{containerArr}</div>
        <InputArea
          river={this.state.river}
          rapid={this.state.rapid}
          feature={this.state.feature}

        />
      </div>
    );
  }
}

export default Nav;
