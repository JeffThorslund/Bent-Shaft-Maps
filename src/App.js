import React, { Component } from 'react';
import './App.css';
import Rapid from './components/Rapid';
import Slider from './components/Slider';
import Map from './components/Map';
import Data from './Data';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 5,
      rapid: "McCoy's Chute Rapid",
      map: false,
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
    this.setState((prevState) => ({ map: !prevState.map }));
  };

  render() {
    // Create Rapid Instance
    let rapidInstance;
    for (let i = 0; i < Data.length; i += 1) {
      if (this.state.rapid === Data[i].name) {
        rapidInstance = (
          <Rapid
            name={Data[i].name}
            desc={Data[i].desc}
            map={Data[i].map}
            hydraulics={Data[i].hydraulics}
            lines={Data[i].lines}
            arrows={Data[i].arrows}
            level={this.state.level}
            selectLevel={this.selectLevel}
            selectRapid={this.selectRapid}
          />
        );
      }
    }

    return (
      <div className="App">
        <div id="toggle-map-button" onClick={this.toggleMap}>
          {this.state.map ? 'Open Map' : 'Close Map'}
        </div>
        {this.state.map && (
          <Map
            map={this.state.map}
            toggleMap={this.toggleMap}
            selectRapid={this.selectRapid}
          />
        )}
        {rapidInstance}
        <Slider selectLevel={this.selectLevel} />
      </div>
    );
  }
}

export default App;
