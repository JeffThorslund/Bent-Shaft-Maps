import React from "react";
import './Hydraulic.css';

const Hydraulic = props => {

    const style = {
        top: props.top,
        left: props.left,
        transform: props.rotation,
        height: props.height,
        width: props.width
    }

    const displayData = (e) => {
      props.displayData(e.currentTarget.id)
    }

  return (
      <div 
      id={props.name} 
      className="hydraulic"
      style={
        style
      }
      onClick={displayData}
      ></div>
  );
};

export default Hydraulic;
