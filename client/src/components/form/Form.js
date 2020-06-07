import React, { Component } from "react";
import Nav from "./Nav";

export class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-wrapper">
        <Nav rivers={this.props.rivers} triggerUpdate={this.props.triggerUpdate} />
      </div>
    );
  }
}

export default Form;
