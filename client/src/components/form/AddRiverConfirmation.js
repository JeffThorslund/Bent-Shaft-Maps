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
    let test =
      this.state.value.length > 5 && /(^[^\s])/.test(this.state.value);
    if (test) {
      this.props.handleClickAddRiver(this.state.value);
      this.props.toggleAddRiverConfirmation();
    } else {
      alert("Dont get fancy!");
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="add-river">
        <label>
          <div className="title">River Name:</div>

          <input
            type="text"
            name="name"
            className="input"
            onChange={this.handleChange}
          />
        </label>
        <input
          type="button"
          value="Submit"
          className="submit"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AddRiverConfirmation;
