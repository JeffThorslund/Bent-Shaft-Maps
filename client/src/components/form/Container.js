import React, { Component } from "react";
import { capitalCase } from "change-case";
var _ = require("lodash");

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arr, type, handleSelect, selected } = this.props;

    //create a list of all items in the array (ex. all eddys, all lines, all rapids etc)
    let list = arr.map((elem, index) => {
      //assign a style based on if the member is selected or not.
      let memberClassName = _.isEqual(selected, elem)
        ? "member on"
        : "member off";

      return (
        <div
          key={`list${index}`}
          className={memberClassName}
          //handles click based on designated method in Form.js
          onClick={() => handleSelect(type, elem)}
        >
          {elem.name}
        </div>
      );
    });

    list.unshift(
      <div className="member title" onClick={() => {}}>
        Choose {capitalCase(type)}
      </div>
    );

    list.push(
      <div className="member new" onClick={this.props.handleAddNewFeature}>
        Add New {capitalCase(type)}
      </div>
    );

    let className = `${this.props.bk} container`;

    return (
      <div className="section">
        <div className={className}>{list}</div>
      </div>
    );
  }
}

export default Container;
