/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Rapid.css';
import Hydraulic from './Hydraulic';
import Display from './Display';
import NextRapid from './NextRapid';
import Features from './Features';

class Rapid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Click on Something!',
      desc: 'Click on a white wave or hole too see more information.',
    };
  }

  displayData = (title, desc) => {
    this.setState(() => ({
      title,
      desc,
    }));
  };

  render() {
    // render array of hydraulics based on selected water level (App state)
    const hydraulicArray = this.props.data.hydraulics.map((element, key) => {
      if (
        this.props.level <= element.range[1]
        && this.props.level >= element.range[0]
      ) {
        return <Hydraulic
          hydraulics={element}
          level={this.props.level}
          displayData={this.displayData}
          key={`hydraulic${key}`}
        />;
      }
      return null;
    });

    // render array of "next rapid arrows" based on selected water level (App state)
    const arrowArray = this.props.data.arrows.map((element, key) => <NextRapid
      rotation={element.rotation}
      bottom={element.bottom}
      right={element.right}
      name={element.name}
      selectRapid={this.props.selectRapid}
      key={`arrow${key}`}
    />);

    return (
      <div className="Rapid" >
        <div id="rapid-name"> {this.props.data.name} </div>

        {/* Vector elements rendered in this component
        Eventually Hydraulics will be too */}
        <Features
          level={this.props.level}
          data={this.props.data}
          displayData={this.displayData}
        />

        <div id="hydraulic-array"> {hydraulicArray} </div>

        <div id="arrow-array"> {arrowArray} </div>
        <Display title={this.state.title} desc={this.state.desc} />
        <img src={this.props.data.riverMap} alt={this.props.data.name} id="background" />
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
