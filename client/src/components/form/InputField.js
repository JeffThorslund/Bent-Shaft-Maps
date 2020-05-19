import React, { Component } from "react";
import { capitalCase } from "change-case";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    let className =
      this.props.value.length < 20 || typeof this.props.value == "number"
        ? "input-field line"
        : "input-field block";

        if (this.props.prop == "River Map - Path"){
          
        }

    return (
      <div className={className}>
        
        <div className="input-label">{this.props.prop}</div>

        


        {this.props.value.length < 20 || typeof this.props.value == "number" ? (
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        ) : (
          <textarea value={this.state.value} onChange={this.handleChange} />
        )}
      </div>
    );
  }
}

export default InputField;
