import React, { Component } from "react";
import "./River.css";
import Rapid from "../rapid/Rapid";
import Slider from "./Slider";
import Map from "./Map";
import GenericToggle from "./GenericToggle";
import { withRouter } from "react-router-dom";
import idParser from "../../tools/idParser";
import Home from "./Home";

import SubmitKnowledge from "./SubmitKnowledge";

class River extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0,
      mapBool: false,
      symbolBool: false,
      knowledgeBool: true,
    };
  }

  // Use slider to select a river level
  selectLevel = (level) => {
    this.setState(() => ({ level }));
  };

  // Set a rapid as current rapid
  selectRapid = (rapid) => {
    this.setState(() => ({ rapid }));
  };

  // Toggles any overlay
  toggleSetting = (setting) => {
    this.setState((prevState) => ({ [setting]: !prevState[setting] }));
  };

  render() {
    // Create Rapid Instance
    const rapidInstance = this.props.data.map((element, key) => {
      if (this.props.match.params.id === idParser(element.name)) {
        return (
          <Rapid
            data={element}
            url={this.props.url}
            level={this.state.level}
            symbolBool={this.state.symbolBool}
            selectLevel={this.selectLevel}
            selectRapid={this.selectRapid}
            key={`rapid${key}`}
          />
        );
      }
      return null;
    });

    return (
      <div className="App">
        {this.state.mapBool && (
          <Map
            url={this.props.url}
            toggleSetting={this.toggleSetting}
            setting="mapBool"
            selectRapid={this.selectRapid}
            data={this.props.data}
            global={this.props.global}
          />
        )}

        {this.state.knowledgeBool && (
          <SubmitKnowledge
            toggleSetting={this.toggleSetting}
            setting="knowledgeBool"
            rapidName={this.props.match.params.id}
            riverName={this.props.global.riverName}
          />
        )}

        {rapidInstance}
        <Slider selectLevel={this.selectLevel} />

        <div className="toggle-board">
          <div id="map-bool">
            <GenericToggle
              toggle={this.state.mapBool}
              toggleSetting={this.toggleSetting}
              setting="mapBool"
              false="Show Map"
              true="Hide Map"
            />
          </div>

          <div id="symbol-bool">
            <GenericToggle
              toggle={this.state.symbolBool}
              toggleSetting={this.toggleSetting}
              setting="symbolBool"
              false="Symbols"
              true="Symbols"
            />
          </div>

          <div id="knowledge-bool">
            <GenericToggle
              toggle={this.state.knowledgeBool}
              toggleSetting={this.toggleSetting}
              setting="knowledgeBool"
              false="Submit Info"
              true="Submit Info"
              
            />
          </div>

          <div id="back-button">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(River);
