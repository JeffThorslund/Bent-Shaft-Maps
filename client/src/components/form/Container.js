import React, { Component } from "react";
import { capitalCase } from "change-case";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arr, name, type, handleSelect, selected } = this.props;

    let list = this.props.arr.map((elem, index) => {
      console.log(
        "selected: ",
        this.props.selected,
        "current element name :",
        elem.name
      );

      let memberClassName =
        this.props.selected === elem.name ? "member on" : "member off";

      return (
        <div
          key={`item${index}`}
          className={memberClassName}
          onClick={() =>
            this.props.handleSelect(this.props.type, elem[this.props.name])
          }
        >
          {elem[this.props.name]}
        </div>
      );
    });

    return (
      <div className="section" key={this.props.key}>
        <div className="header"> {capitalCase(this.props.type)} </div>
        <div className="container">{list}</div>
      </div>
    );
  }
}

export default Container;
