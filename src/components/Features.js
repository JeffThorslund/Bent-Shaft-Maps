/*eslint-disable*/
import React from 'react'
import Line from './Line'
import Eddy from './Eddy'
import './Features.css'

const Features = (props) => {

    // render array of lines based on selected water level (App state)
    const lineArray = props.data.lines.map((element, key) => {
        if (
            props.level <= element.range[1]
            && props.level >= element.range[0]
        ) {
            return <Line vector={element.vector} name={element.name} key={`line${key}`} />;
        }
        return null;
    });

    // render array of eddys based on selected water level (App state)
    const eddyArray = props.data.eddys.map((element, key) => {
        if (
            props.level <= element.range[1]
            && props.level >= element.range[0]
        ) {
            return <Eddy vector={element.vector} name={element.name} key={`line${key}`} />;
        }
        return null;
    });


    return (<div className="Features">
        <svg
            id='vector-container'
            viewBox="0 0 160 90"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <g id="line-array" className="clickable" fill="none">
                {lineArray}
            </g>

            <g id="eddy-array" className="clickable">
                {eddyArray}
            </g>
        </svg>
    </div>

    )
}

export default Features
