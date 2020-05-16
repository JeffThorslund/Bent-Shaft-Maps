import React, { Component } from "react";
import Nav from "./Nav";

export class Form extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <Nav dataArr={this.props.dataArr}/>
      </div>
    );
  }
}

export default Form;
