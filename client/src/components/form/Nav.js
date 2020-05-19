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
  //element = part of data object
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

let containerArr = [];

    
    //creates a container of all the river names.
    containerArr.push(
      <Container
        arr={this.props.dataArr} //entire JSON database
        type="river"
        handleSelect={this.handleSelect}
        selected={this.state.river} //selected river
        key="river_key"
        bk={"bk1"}
      />
    );

    if (this.state.river !== null) {
      containerArr.push(
        <Container
          arr={this.state.river.rapids}
          type="rapid"
          handleSelect={this.handleSelect}
          selected={this.state.rapid}
          key="rapid_key"
          bk={"bk2"}
        />
      );

      if (this.state.rapid !== null) {
        
        const featureArr = Object.entries(this.state.rapid)
        //keeps values that are arrays.
          .filter((elem) => {
            return Array.isArray(elem[1]);
          })
          .map((elem, index) => {
            let bk = index % 2 === 0 ? "bk1" : "bk2";

            return (
              <Container
                arr={this.state.rapid[elem[0]]} //array of a certain feature
                type={elem[0]}
                handleSelect={this.handleFeatureSelect}
                handleAddNewFeature={this.handleAddNewFeature}
                selected={this.state.feature}
                key={`feature_key_${index}`}
                bk={bk}
              />
            );
          });

        //add the feature containers to the container array.
        containerArr = containerArr.concat(featureArr);
      }
    }
    return (
      <div className="form">
        <div className="containers">{containerArr}</div>
        {/*<InputArea
          river={this.state.river}
          rapid={this.state.rapid}
          feature={this.state.feature}
        />*/}
      </div>
    );
  }
}

export default Nav;
