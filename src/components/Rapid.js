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
    const hydraulicArray = this.props.data.hydraulics.map((element, key) => {
      if (
        this.props.level <= element.range[1]
        && this.props.level >= element.range[0]
      ) {
        return <Hydraulic
          level={this.props.level}
          desc={element.desc}
          name={element.name}
          top={element.top}
          left={element.left}
          height={element.height}
          width={element.width}
          rotation={element.rotation}
          displayData={this.displayData}
          key={`hydraulic${key}`}
        />;
      }
      return null;
    });

    // render array of lines based on selected water level (App state)
    const lineArray = this.props.data.lines.map((element, key) => {
      if (
        this.props.level <= element.range[1]
        && this.props.level >= element.range[0]
      ) {
        return <Line vector={element.vector} key={`line${key}`} />;
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
        <div id="line-array"> {lineArray} </div>
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
