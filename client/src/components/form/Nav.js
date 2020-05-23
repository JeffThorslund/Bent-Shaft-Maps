import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";
import { handleClickAddRapid } from "./requests";

import InputArea from "./InputArea";
var _ = require("lodash");

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      river: null, //index
      rapid: null, //index
      feature: null, //index
      featureName: null, //string
    };
  }

  //Sets selection of river and rapid.
  //element = part of data object
  //type = "river" or "rapid"
  handleSelect = (label, index) => {
    //compare if the state is already === to the object
    !_.isEqual(this.state[label], index)
      ? //if not, user wants to select it
        this.setState({
          [label]: index,
          feature: null,
          featureName: null,
        })
      : //if yes, user wants to "unselect it"
        this.setState({
          [label]: null,
          feature: null,
          featureName: null,
        });
    //if a new river is selected, rapid and feature should both revert to null
    if (label === "river") {
      this.setState({
        rapid: null,
        feature: null,
        featureName: null,
      });
    }
  };

  //Sets selection of feature. Similar logic to comments above.
  handleFeatureSelect = (label, index) => {
    !_.isEqual([this.state.featureName, this.state.feature], [label, index])
      ? this.setState({
          feature: index,
          featureName: label,
        })
      : this.setState({
          feature: null,
          featureName: null,
        });
  };

  //Add new of anything
  handleAddNewFeature = () => {
    this.setState({
      feature: null,
    });
  };

  render() {
    let containerArr = [];

    let riverArray = this.props.dataArr;

    containerArr.push(
      <Container
        arr={riverArray}
        type="river"
        label="river"
        handleSelect={this.handleSelect}
        selected={this.state.river} //selected river
        key="river_key"
        bk={"bk1"}
        onAdd={() => {}}
      />
    );

    if (this.state.river !== null) {
      let rapidArray = riverArray[this.state.river].rapids;

      containerArr.push(
        <Container
          arr={rapidArray}
          type="rapid"
          label="rapid"
          handleSelect={this.handleSelect}
          selected={this.state.rapid}
          key="rapid_key"
          bk={"bk2"}
          onAdd={()=>handleClickAddRapid("ottawa-river")}
          river={this.state.river}
          riverArray={riverArray}
        />
      );

      if (this.state.rapid !== null) {
        const featureContainers = Object.entries(rapidArray[this.state.rapid])
          .filter((elem) => {
            return Array.isArray(elem[1]);
          })
          .map((elem, index) => {
            let bk = index % 2 === 0 ? "bk1" : "bk2";
            return (
              <Container
                arr={elem[1]} //array of a certain feature
                label={elem[0]}
                handleSelect={this.handleFeatureSelect}
                handleAddNewFeature={this.handleAddNewFeature}
                rapidArray={rapidArray}
                type={this.state.featureName}
                selected={this.state.feature}
                key={`feature_key_${index}`}
                bk={bk}
                onAdd={() => {}}
              />
            );
          });

        //add the feature containers to the container array.
        containerArr = containerArr.concat(featureContainers);
      }
    }
    return (
      <div className="form">
        <div className="containers">{containerArr}</div>
        <InputArea
          river={this.state.river}
          rapid={this.state.rapid}
          feature={this.state.feature}
          featureName={this.state.featureName}
          dataArr={this.props.dataArr}
          forceUpdateHandler={this.props.forceUpdateHandler}
        />
      </div>
    );
  }
}

export default Nav;
