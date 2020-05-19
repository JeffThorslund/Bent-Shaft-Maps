import React, { Component } from "react";
import InputField from "./InputField";
import { capitalCase, paramCase } from "change-case";
const axios = require("axios");
var _ = require("lodash");

export class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      riverList: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("updated");
      axios
        .post("/api/getlist", {
          path: `./client/src/river-data/${paramCase(
            this.props.river.name
          )}/maps`,
        })
        .then((response) => {
          console.log(response.data);
          this.setState({ riverList: JSON.parse(response.data).list });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
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

    return (
      <div className="input-area">
        <div className="inputs">{inputs}</div>
      </div>
    );
  }
}

export default InputArea;
