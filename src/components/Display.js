import React, { useState } from 'react'
import './Display.css'

const Display = (props) => {

    

    return (
        <div className = 'display-wrapper'>
            <div id='title'> 
                {props.title}
            </div>

            <div id='desc'>
                {props.description}
            </div>
        </div>
    )
}

export default Display
