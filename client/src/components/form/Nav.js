import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";
import InputArea from "./InputArea";
var _ = require("lodash");

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      river: null,
      rapid: null,
      feature: null,
    };
  }

  //Sets selection of river and rapid.
  //element = object container either rapid or river
  //type = "river" or "rapid"
  handleSelect = (type, element) => {
    //compare if the state is already === to the object
    !_.isEqual(this.state[type], element)
      ? //if not, user wants to select it
        this.setState({
          [type]: element,
          feature: null,
        })
      : //if yes, user wants to "unselect it"
        this.setState({
          [type]: null,
          feature: null,
        });
    //if a new river is selected, rapid and feature should both revert to null
    if (type === "river") {
      this.setState({
        rapid: null,
        feature: null,
      });
    }
  };

  //Sets selection of feature. Similar logic to comments above.
  handleFeatureSelect = (type, element) => {
    !_.isEqual(this.state.feature, element)
      ? this.setState({
          feature: element,
        })
      : this.setState({
          feature: null,
        });
  };

  //Add new of anything
  handleAddNewFeature = () => {
    this.setState({
      feature: null,
    });
  };

  render() {
    //array of all rivers
    const { dataArr } = this.props;

    //an array of rendered containers.
    let containerArr = [];

    //creates a container of all the river names.
    containerArr.push(
      <Container
        arr={dataArr}
        type="river"
        handleSelect={this.handleSelect}
        selected={this.state.river}
        key="river_key"
      />
    );

    //if a river is selected, show an array of possible rapids.
    if (this.state.river !== null) {
      //finds index of selected river in river array.
      const riverIndex = dataArr.findIndex((elem) => {
        return _.isEqual(elem, this.state.river);
      });
      //array of rapids for those rivers.
      const rapidArray = dataArr[riverIndex].rapids;

      //creates a container of all the rapid names.
      containerArr.push(
        <Container
          arr={rapidArray}
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
          return _.isEqual(elem, this.state.rapid)
        });

        //creates a container for each feature type
        const featureArray = features.map((elem, index) => {
          let arr = rapidArray[rapidIndex][elem];
          return (
            <Container
              arr={arr}
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
