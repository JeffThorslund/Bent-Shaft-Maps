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
      desc: null,
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
        name={element.name}
        selectRapid={this.props.selectRapid}
        key={`arrow${key}`}
      />
    ));

    return (
      <div className="Rapid">
        <Basemap map={this.props.data.riverMap} />
        <div id="rapid-name"> {this.props.data.name} </div>
        <div id="level-display">
          <div id="feet"> {this.props.level} ft</div>
          <div id="cfs">{this.props.level * 140 + 600} mm</div>
        </div>
        <Features
          level={this.props.level}
          data={this.props.data}
          displayData={this.displayData}
        />
        <div id="arrow-array"> {arrowArray} </div>
        <Display title={this.state.title} desc={this.state.desc} />
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
