import React, { Component } from "react";
import "./AddRiverConfirmation.css";

export class AddRiverConfirmation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    this.props.handleClickAddRiver(this.state.value);
    this.props.toggleAddRiverConfirmation();
    e.preventDefault();
  };

  render() {
    return (
      <div className="background">
        <label>
          River Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default AddRiverConfirmation;
