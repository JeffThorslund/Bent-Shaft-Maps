import React from "react";
import "./SymbolToggle.css";

class SymbolToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    const trueStyle = {};
    const falseStyle = {};

    let currentStyle = this.state.toggle ? trueStyle : falseStyle;

    return (
      <div className="SymbolToggle" onClick={this.handleClick}>
        <span class="dot" />
        <div className="text">Symbols</div>
      </div>
    );
  }
}

export default SymbolToggle;
