import React, { Component } from "react";
import InputField from "./InputField";
import { capitalCase } from "change-case";
var _ = require("lodash");

export class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }

  render() {
    let data = this.props.feature || this.props.rapid || this.props.river;
    let inputs = [];

    let key = 0;

    const input = (data, prevProp) => {
      for (let elem in data) {
        key++;
        if (typeof data[elem] == "object" && !Array.isArray(data[elem])) {
          input(data[elem], elem);
        } else if (!Array.isArray(data[elem]) || elem == "range") {
          inputs.push(
            <InputField
              prop={
                prevProp.length == 0
                  ? `${capitalCase(elem)}`
                  : `${capitalCase(prevProp)} - ${capitalCase(elem)}`
              }
              value={data[elem]}
              key={`field${key}`}
            />
          );
        } else {
          console.log(elem, " will be included somewhere else");
        }
      }
    };

    input(data, "");

    let inputFields = this.state.list
      ? this.state.list.map((elem, index) => {
          return (
            <InputField prop={elem[0]} value={elem[1]} key={`field${index}`} />
          );
        })
      : null;

    return (
      <div className="input-area">
        <div className="inputs">{inputs}</div>
      </div>
    );
  }
}

export default InputArea;
