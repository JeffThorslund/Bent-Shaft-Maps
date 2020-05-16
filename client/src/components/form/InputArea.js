import React, { Component } from "react";

export class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.river !== prevProps.river) {
        
    }
  }

  render() {
    return (
      <div className="input-area">
        <div className="header">This is going to be the input area</div>
        
      </div>
    );
  }
}

export default InputArea;
