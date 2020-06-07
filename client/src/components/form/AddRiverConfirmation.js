import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./AddRiverConfirmation.css";

export class AddRiverConfirmation extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    if (this.validator.allValid()) {
      this.props.handleClickAddRiver(this.state.value);
      this.props.toggleAddRiverConfirmation();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="add-river">
        <div className="title">River Name:</div>
        <div className="add-river-wrapper">
          <input
            type="text"
            name="name"
            className="input"
            onChange={this.handleChange}
          />
          <input
            type="button"
            value="Submit"
            className="submit"
            onClick={this.handleSubmit}
          />
        </div>
        {this.validator.message("title", this.state.value, "required")}
      </div>
    );
  }
}

export default AddRiverConfirmation;
