import React from 'react';
import PropTypes from 'prop-types';

const Eddy = (props) => (
    <g className={props.name}>
        {props.vector}
    </g>
);

export default Eddy;

Eddy.propTypes = {
    name: PropTypes.string.isRequired,
    vector: PropTypes.element.isRequired,
};
