import React, { Component } from "react";
import "./River.css";
import Rapid from "./Rapid";
import Slider from "./Slider";
import Map from "./Map";
import GenericToggle from "./GenericToggle";
import { withRouter } from "react-router-dom";
import idParser from "../tools/idParser";
import Home from "./Symbols/Home";

class River extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0,
      mapBool: false,
      symbolBool: false,
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

  // Toggles map overlay
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

          <div id="back-button">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(River);
