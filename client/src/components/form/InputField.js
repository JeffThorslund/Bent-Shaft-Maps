import React, { Component } from "react";
import { capitalCase } from "change-case";

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className =
      this.props.value.length < 20 || typeof this.props.value == "number"
        ? "input-field line"
        : "input-field block";

    return (
      <div className={className}>
        <div className="input-label">{this.props.prop}</div>

        {this.props.value.length < 20 || typeof this.props.value == "number" ? (
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        ) : (
          <textarea value={this.props.value} onChange={this.handleChange} />
        )}
      </div>
    );
  }
}

export default InputField;
