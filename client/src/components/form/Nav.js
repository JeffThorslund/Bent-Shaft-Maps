import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";
import { paramCase } from "change-case"

import InputArea from "./InputArea";
var _ = require("lodash");
const axios = require("axios");

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riverIndex: null, //index
      rapidIndex: null, //index
      featureType: null, //string
      featureIndex: null, //index
    };
  }

  handleRiverSelect = (index) => {
    this.state.riverIndex !== index
      ? //if not, user wants to select it
        this.setState({
          riverIndex: index,
        })
      : //if yes, user wants to "unselect it"
        this.setState({
          riverIndex: null,
        });
    this.setState({
      rapidIndex: null,
      featureIndex: null,
      featureType: null,
    });
  };

  handleRapidSelect = (index) => {
    this.state.rapidIndex !== index
      ? //if not, user wants to select it
        this.setState({
          rapidIndex: index,
        })
      : //if yes, user wants to "unselect it"
        this.setState({
          rapidIndex: null,
        });
    this.setState({
      featureIndex: null,
      featureType: null,
    });
  };

  //Sets selection of feature. Similar logic to comments above.
  handleFeatureSelect = (index, type) => {
    !_.isEqual([this.state.featureIndex, this.state.featureType], [index, type])
      ? this.setState({
          featureIndex: index,
          featureType: type,
        })
      : this.setState({
          featureIndex: null,
          featureType: null,
        });
  };

  //Add new of anything
  handleClickAddRapid = (rivers,riverIndex) => {
    axios
      .post("/api/handleClickAddRapid", {
        rivers: rivers,
        riverIndex: riverIndex,
        riverName: paramCase(rivers[riverIndex].name)
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { riverIndex, rapidIndex, featureType, featureIndex } = this.state;
    const { rivers } = this.props;

    let containerArr = [];

    containerArr.push(
      <Container
        arr={rivers}
        type="river"
        handleSelect={this.handleRiverSelect}
        handleClickAdd={() => {}}
        selectedIndex={riverIndex}
        key="river_key"
        bk={"bk1"}
      />
    );

    if (riverIndex !== null) {
      containerArr.push(
        <Container
          arr={rivers[riverIndex].rapids}
          type="rapid"
          handleSelect={this.handleRapidSelect}
          handleClickAdd={()=>this.handleClickAddRapid(rivers,riverIndex)}
          selectedIndex={rapidIndex}
          key="rapid_key"
          bk={"bk2"}
        />
      );
    }

    if (rapidIndex !== null) {
      const featureContainers = Object.entries(
        rivers[riverIndex].rapids[rapidIndex]
      )
        .filter((elem) => {
          return Array.isArray(elem[1]);
        })
        .map((elem, index) => {
          let bk = index % 2 === 0 ? "bk1" : "bk2";
          return (
            <Container
              arr={elem[1]}
              type={elem[0]}
              handleSelect={this.handleFeatureSelect}
              handleClickAdd={() => {}}
              selectedIndex={featureIndex}
              selectedType={featureType}
              key={`feature_key_${index}`}
              bk={bk}
              rapids={rivers[riverIndex].rapids} //used to search for arrow names
            />
          );
        });

      containerArr = containerArr.concat(featureContainers);
    }
    return (
      <div className="form">
        <div className="containers">{containerArr}</div>
        <InputArea
          riverIndex={riverIndex}
          rapidIndex={rapidIndex}
          featureIndex={featureIndex}
          featureType={featureType}
          rivers={rivers}
        />
      </div>
    );
  }
}

export default Nav;
