import React, { Component } from "react";
import "./App.css";
import Rapid from "./components/Rapid";
import Slider from "./components/Slider";
import Map from "./components/Map";
import GenericToggle from "./components/GenericToggle";

import Data from "./Data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0,
      rapid: "McCoy's Chute Rapid", //"McCoy's Chute Rapid"
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
    const rapidInstance = Data.map((element, key) => {
      if (this.state.rapid === element.name) {
        return (
          <Rapid
            data={element}
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
            toggleSetting={this.toggleSetting}
            setting="mapBool"
            selectRapid={this.selectRapid}
            mapLabel={Data}
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
        </div>
      </div>
    );
  }
}

export default App;
