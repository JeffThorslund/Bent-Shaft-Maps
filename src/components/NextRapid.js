import React from "react";
import "./NextRapid.css";

const NextRapid = (props) => {

    const handleClick = (e) => {
        alert(e.currentTarget.id)
    }

    let style={
        transform: `rotate(${props.rotation})`,
        bottom: props.bottom,
        right: props.right
    }

  return (
    <div className="NextRapid" style={style} >
      <svg viewBox="0 0 11 11" onClick={handleClick} id={props.name}>
        <polyline
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
            2,2 8,5 2,8 "
        />
      </svg>
    </div>
  );
};

export default NextRapid;

//Make arrow flatten and show next rapid name. 