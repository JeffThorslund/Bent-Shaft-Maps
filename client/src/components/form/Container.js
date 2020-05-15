import React, { Component } from "react";
import { capitalCase } from "change-case";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arr, name, type, handleSelect, selected } = this.props;

    //create a list of all items in the array (ex. all eddys, all lines, all rapids etc)
    let list = arr.map((elem, index) => {
      //assign a style based on if the member is selected or not.
      let memberClassName = selected === elem[name] ? "member on" : "member off";

      return (
        <div
          key={`list${index}`}
          className={memberClassName}
          //handles click based on designated method in Form.js
          onClick={() => handleSelect(type, elem[name])}
        >
          {elem[name]}
        </div>
      );
    });

    return (
      <div className="section">
        <div className="header"> {capitalCase(type)} </div>
        <div className="container">{list}</div>
      </div>
    );
  }
}

export default Container;
