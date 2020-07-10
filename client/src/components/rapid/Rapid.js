import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Rapid.css";
import NextRapid from "./NextRapid";
import Features from "./Features";
import Basemap from "./Basemap";
import Description from "./Description"

class Rapid extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    //destructure incoming props
    const { data, allData, url, level } = this.props;

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
          <div id="rapid-desc"> <Description level={level} desc={data.desc} /> </div>
        </div>

        <div id="level-display">
          <div id="feet">
            {" "}
            {level} {allData.level.levelUnits}
          </div>
        </div>
        <Features level={level} data={data} />
        <div id="arrow-array"> {arrowArray} </div>
      </div>
    );
  }
}

export default Rapid;

Rapid.propTypes = {
  data: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
};
