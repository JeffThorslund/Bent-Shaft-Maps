import React, { useState } from "react";
import GlobalRouter from "./GlobalRouter";
import giveUp from "../../river-data/ottawa-river/data.json";

class RiverImporter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: giveUp,
    };
  }

  render() {
    return (
      <div>
        <GlobalRouter dataArr={[this.state.data]} />
      </div>
    );
  }
}

export default RiverImporter;
