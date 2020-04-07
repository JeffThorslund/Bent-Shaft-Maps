import React from 'react'
import Overview from './basemaps/Overview.png'
import "./Map.css"
import PropTypes from "prop-types";

const Map = (props) => {

    const mapToggle = (map) => {
        let style
        if (map) {
            style = {
                display: 'block',
            }
        }
        else if(!map){
            style = {
                display: 'none'
            }
        }
        else{
            console.log('error')
        }

        return style
    }

    

    return (
        <div className="Map" style={mapToggle(props.map)}>
           <img id="overview" src={Overview} alt="Italian Trulli"/>
        </div>
    )
}

export default Map

Map.propTypes = {
    map:PropTypes.bool
}