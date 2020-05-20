import React, { Component } from "react";
import { capitalCase } from "change-case";
var _ = require("lodash");

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arr, label, type, handleSelect, selected } = this.props;

    let list = arr.map((elem, index) => {
      let memberClassName = _.isEqual([label, selected], [type, index])
        ? "member on"
        : "member off";

      return (
        <div
          key={`list${index}`}
          className={memberClassName}
          onClick={() => handleSelect(label, index)}
        >
          {elem.name || elem.type}
        </div>
      );
    });

    list.push(
      <div className="member new" onClick={this.props.handleAddNewFeature}>
        Add New {capitalCase(label)}
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
