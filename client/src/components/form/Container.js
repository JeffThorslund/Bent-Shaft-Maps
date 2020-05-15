import React, { Component } from "react";

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: null,
    };
  }

  render() {
    let list = this.props.arr.map((elem, index) => {
      return (
        <div
          className="clickable"
          onClick={() =>
            this.props.handleClick(this.props.id, elem[this.props.name])
          }
        >
          {elem[this.props.name]}
        </div>
      );
    });

    return (
      <div className="section">
        <div className="header"> {this.props.id} </div>
        <div className="container">{list}</div>
      </div>
    );
  }
}

export default Container;
