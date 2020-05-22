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
    //destructure incoming props
    const {data, allData, url, level, selectLevel} = this.props

    // render array of "next rapid arrows" based on selected water level (App state)
    const arrowArray = data.arrows.map((element, key) => (
      <NextRapid
        arrows={element}
        url={url}
        key={`arrow${key}`}
        allData={allData}
      />
    ));

    return (
      <div className="Rapid">
        <Basemap
          path={data.riverMap.path}
          viewBox={data.riverMap.viewBox}
          rapidName={data.name}
          name={allData.name}
        />
        <div className="rapid-header">
          <div id="rapid-name"> {data.name} </div>
          <div id="rapid-desc"> {data.desc} </div>
        </div>

        <div id="level-display">
          <div id="feet"> {level} ft</div>
          <div id="cfs">{level * 140 + 600} mm</div>
        </div>
        <Features
          level={level}
          data={data}
          displayData={this.displayData}
        />
        <div id="arrow-array"> {arrowArray} </div>

        <Display
          title={this.state.title}
          desc={this.state.desc}
          displayPosition={data.displayPosition}
        />
      </div>
    );
  }
}

export default Rapid;

Rapid.propTypes = {
  data: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  selectLevel: PropTypes.func.isRequired,
};
