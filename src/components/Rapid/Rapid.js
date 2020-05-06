import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Rapid.css";
import Display from "./Display";
import NextRapid from "./NextRapid";
import Features from "./Features";
import Basemap from "./Basemap";

class Rapid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Click on Something!",
      desc: "",
    };
  }

  displayData = (title, desc) => {
    this.setState(() => ({
      title,
      desc,
    }));
  };

  render() {
    // render array of "next rapid arrows" based on selected water level (App state)
    const arrowArray = this.props.data.arrows.map((element, key) => (
      <NextRapid
        arrows={element}
        url={this.props.url}
        name={element.name}
        selectRapid={this.props.selectRapid}
        key={`arrow${key}`}
      />
    ));

    return (
      <div className="Rapid">
        <Basemap
          path={this.props.data.riverMap.path}
          viewBox={this.props.data.riverMap.viewBox}
        />
        <div className="rapid-header">
          <div id="rapid-name"> {this.props.data.name} </div>
          <div id="rapid-desc"> {this.props.data.desc} </div>
        </div>

        <div id="level-display">
          <div id="feet"> {this.props.level} ft</div>
          <div id="cfs">{this.props.level * 140 + 600} mm</div>
        </div>
        <Features
          level={this.props.level}
          symbolBool={this.props.symbolBool}
          data={this.props.data}
          displayData={this.displayData}
        />
        <div id="arrow-array"> {arrowArray} </div>

        {Object.keys(this.props.data.displayPosition).length !== 0 && (
          <Display
            title={this.state.title}
            desc={this.state.desc}
            displayPosition={this.props.data.displayPosition}
          />
        )}
      </div>
    );
  }
}

export default Rapid;

Rapid.propTypes = {
  data: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  selectLevel: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
