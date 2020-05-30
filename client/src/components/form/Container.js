import React, { Component } from "react";
import { capitalCase } from "change-case";
var _ = require("lodash");

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      arr,
      type,
      handleSelect,
      handleClickAdd,
      selectedIndex,
      selectedType,
      rapids,
    } = this.props;

    let list = arr.map((elem, index) => {
      let memberClassName = _.isEqual(
        [selectedType || type, selectedIndex],
        [type, index]
      )
        ? "member on"
        : "member off";

      //special case for showing arrow names
      let pointer =
        type === "arrows"
          ? (rapids.find((rapid) => {
              return rapid.id == elem.linkId;
            }).name)
          : null;

      return (
        <div
          key={`list${index}`}
          className={memberClassName}
          onClick={() => handleSelect(index, type)}
        >
          {pointer || elem.type || elem.name}
        </div>
      );
    });

    list.push(
      <div
        className="member new"
        onClick={handleClickAdd}
        key="add_new"
      >
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
