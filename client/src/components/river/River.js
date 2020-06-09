import React, { Component } from "react";
import "./River.css";
import Rapid from "../rapid/Rapid";
import Slider from "./Slider";
import Map from "./Map";
import GenericToggle from "./GenericToggle";
import { withRouter } from "react-router-dom";
import Home from "./Home";
import { paramCase } from "change-case";

import SubmitKnowledge from "./SubmitKnowledge";

class River extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: null,
      mapBool: false,
      knowledgeBool: false,
    };
  }

  componentDidMount() {
    this.setState({
      level: this.props.data.level.defaultLevel,
    });
  }

  // Use slider to select a river level
  selectLevel = (level) => {
    this.setState(() => ({ level }));
  };

  // Toggles any overlay
  toggleSetting = (setting) => {
    this.setState((prevState) => ({ [setting]: !prevState[setting] }));
  };

  render() {
    // Create Rapid Instance
    const rapidInstance = this.props.data.rapids.map((element, key) => {
      if (this.props.match.params.id === paramCase(element.name)) {
        return (
          <Rapid
            data={element}
            allData={this.props.data}
            url={this.props.url}
            level={this.state.level}
            selectLevel={this.selectLevel}
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
          />
        )}

        {this.state.knowledgeBool && (
          <SubmitKnowledge
            toggleSetting={this.toggleSetting}
            setting="knowledgeBool"
            rapidName={this.props.match.params.id}
            name={this.props.data.name}
          />
        )}

        {rapidInstance}
        <Slider selectLevel={this.selectLevel} rapid={this.props.data} />

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

          <div id="knowledge-bool">
            <GenericToggle
              toggle={this.state.knowledgeBool}
              toggleSetting={this.toggleSetting}
              setting="knowledgeBool"
              false="Submit Info"
              true="Submit Info"
            />
          </div>

          <div id="home">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(River);
