/* eslint-disable */
import React from 'react'
import './Eddy.css'

function Eddy(props) {
    return (

        <div className="Eddy">
            <svg xmlns="http://www.w3.org/2000/svg" id="svg" preserveAspectRatio="none" viewBox="0 0 90 90" fill="#696969" >
                {props.vector}
            </svg>
        </div>
    );

}

export default Eddy

