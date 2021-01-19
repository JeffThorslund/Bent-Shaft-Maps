import React from 'react';

/** The title pf the rapid that shows a name and description based on water level. */

const RapidHeader = ({ name, description, level }) => (
  <div className="rapid-header">
    <div className="rapid-name"> {name} </div>
    <div className="rapid-desc">{description}</div>
  </div>
);

export default RapidHeader;
