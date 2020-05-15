import React, { Component } from "react";

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: null,
    };
  }

  render() {
    let list = this.props.arr.map((elem) => {
      return <div>{elem[this.props.name]}</div>;
    });

    return (
      <div>
        <h2> {this.props.id} </h2>
        {list}
      </div>
    );
  }
}

export default Container;
