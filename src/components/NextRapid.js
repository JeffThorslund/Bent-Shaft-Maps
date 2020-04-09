import React from "react";
import "./NextRapid.css";

const NextRapid = (props) => {
  const style = {
    bottom: props.arrows.bottom,
    right: props.arrows.right,
  };

  return (
    <div
      className="NextRapid"
      style={style}
      onClick={() => {
        alert("Coming soon!");
      }}
    >
      {props.arrows.name}
    </div>
  );
};

export default NextRapid;
