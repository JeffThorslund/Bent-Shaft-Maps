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
      dataArr: this.props.dataArr,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.river != prevProps.river && this.props.river != null) {
      axios
        .post("/api/getlist", {
          path: `./client/src/river-data/${paramCase(
            this.props.dataArr[this.props.river].name
          )}/maps`,
        })
        .then((response) => {
          console.log(response.data);
          this.setState({ riverList: JSON.parse(response.data).list });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleChange = (e) => {
    
  };

  render() {
    const { river, rapid, feature, featureName } = this.props;
    
    let dataArr = this.state.dataArr ? [...this.state.dataArr] : null

    const data =
      feature !== null
        ? dataArr[river].rapids[rapid][featureName][feature]
        : rapid !== null
        ? dataArr[river].rapids[rapid]
        : river !== null
        ? dataArr[river]
        : null;

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
              handleChange={this.handleChange}
            />
          );
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
