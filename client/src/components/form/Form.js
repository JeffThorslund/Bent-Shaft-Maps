import React, { Component } from "react";
import Nav from "./Nav";

export class Form extends Component {
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
    return (
      <div className="form-wrapper">
        <Nav
          dataArr={this.props.dataArr}
          handleSelect={this.handleSelect}
          handleFeatureSelect={this.handleFeatureSelect}
          handleAddNewFeature={this.handleAddNewFeature}
          river={this.state.river}
          rapid={this.state.rapid}
          feature={this.state.feature}
        />
      </div>
    );
  }
}

export default Form;
