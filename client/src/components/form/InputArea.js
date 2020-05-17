import React, { Component } from "react";
import InputField from "./InputField";
var _ = require("lodash");

export class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }

  componentDidUpdate(prevProps) {
    //check for a change in props
    if (this.props !== prevProps) {
      let list = [];

      //function that creates list
      const listMaker = (type) => {
        console.log("input", this.props[type]);
        list = Object.entries(this.props[type])
          //filter out objects and arrays
          .filter((elem) => {
            console.log("filter", typeof elem[1] !== "string");
            return typeof elem[1] !== "object";
          });
        console.log("output", list);
        this.setState({ list });
      };

      if (this.props.feature) {
        listMaker("feature");
      } else if (this.props.rapid) {
        listMaker("rapid");
      } else if (this.props.river) {
        listMaker("river");
      } else {
        this.setState({ list: null });
      }
    }
  }

  render() {
    let inputFields = this.state.list
      ? this.state.list.map((elem, index) => {
          return (
            <InputField prop={elem[0]} value={elem[1]} key={`field${index}`} />
          );
        })
      : null;

    return (
      <div className="input-area">
        <div className="inputs">{inputFields}</div>
      </div>
    );
  }
}

export default InputArea;
