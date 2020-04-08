import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Rapid.css';
import Hydraulic from './Hydraulic';
import Line from './Line';
import Display from './Display';
import NextRapid from './NextRapid';


class Rapid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Click on Something!',
      desc: 'Click on a white wave or hole too see more information.',
    };
  }

  // Sets the current display with clicked line or hydraulic
  displayData = (name) => {
    let result = '';
    for (let i = 0; i < this.props.data.hydraulics.length; i += 1) {
      if (name === this.props.data.hydraulics[i].name) {
        result = { ...this.props.data.hydraulics[i] };
      }
    }
    this.setState(() => ({
      title: result.name,
      desc: result.desc,
    }));
  };

  render() {
    // render array of hydraulics based on selected water level (App state)
    const hydraulicArray = [];

    for (let i = 0; i < this.props.data.hydraulics.length; i += 1) {
      if (
        this.props.level <= this.props.data.hydraulics[i].range[1]
        && this.props.level >= this.props.data.hydraulics[i].range[0]
      ) {
        hydraulicArray.push(
          <Hydraulic
            level={this.props.level}
            desc={this.props.data.hydraulics[i].desc}
            name={this.props.data.hydraulics[i].name}
            top={this.props.data.hydraulics[i].top}
            left={this.props.data.hydraulics[i].left}
            height={this.props.data.hydraulics[i].height}
            width={this.props.data.hydraulics[i].width}
            rotation={this.props.data.hydraulics[i].rotation}
            displayData={this.displayData}
            key={i}
          />,
        );
      }
    }

    // render array of lines based on selected water level (App state)
    const lineArray = [];

    for (let i = 0; i < this.props.data.lines.length; i += 1) {
      if (
        this.props.level <= this.props.data.lines[i].range[1]
        && this.props.level >= this.props.data.lines[i].range[0]
      ) {
        lineArray.push(<Line vector={this.props.data.lines[i].vector} key={i} />);
      }
    }

    // render array of "next rapid arrows" based on selected water level (App state)
    const arrowArray = [];

    for (let i = 0; i < this.props.data.arrows.length; i += 1) {
      arrowArray.push(
        <NextRapid
          rotation={this.props.data.arrows[i].rotation}
          bottom={this.props.data.arrows[i].bottom}
          right={this.props.data.arrows[i].right}
          name={this.props.data.arrows[i].name}
          selectRapid={this.props.selectRapid}
          key={i}
        />,
      );
    }

    return (
      <div className="Rapid">
        <div id="rapid-name"> {this.props.data.name} </div>

        <div id="line-array"> {lineArray} </div>

        <div id="hydraulic-array"> {hydraulicArray} </div>

        <div id="arrow-array"> {arrowArray} </div>

        <Display title={this.state.title} desc={this.state.desc} />

        <img src={this.props.data.map} alt={this.props.data.name} id="background" />
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
