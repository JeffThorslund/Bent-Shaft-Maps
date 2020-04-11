import React from "react";

const style = {
  position: "absolute",
  zIndex: "-1",
  top: "0px",
  left: "0px",
};

const Basemap = (props) => {
  return (
    <svg
      style={style}
      width="100vw"
      height="100vh"
      viewBox={props.map.viewBox}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Basemap"
    >
      {props.map.path}
    </svg>
  );
};

export default Basemap;
