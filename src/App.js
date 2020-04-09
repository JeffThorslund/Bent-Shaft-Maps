import React, { Component } from "react";
import "./App.css";
import Rapid from "./components/Rapid";
import Slider from "./components/Slider";
import Map from "./components/Map";
import Data from "./Data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 5,
      rapid: "McCoy's Chute Rapid",
      mapBool: false,
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
  toggleMap = () => {
    this.setState((prevState) => ({ mapBool: !prevState.mapBool }));
  };

  render() {
    // Create Rapid Instance
    const rapidInstance = Data.map((element, key) => {
      if (this.state.rapid === element.name) {
        return (
          <Rapid
            data={element}
            level={this.state.level}
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
        <div id="toggle-map-button" onClick={this.toggleMap}>
          {this.state.mapBool ? "Close" : "Open"}
        </div>
        {this.state.mapBool && (
          <Map
            toggleMap={this.toggleMap}
            selectRapid={this.selectRapid}
            mapLabel={Data}
          />
        )}
        {rapidInstance}
        <Slider selectLevel={this.selectLevel} />
      </div>
    );
  }
}

export default App;
