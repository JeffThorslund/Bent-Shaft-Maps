import React from "react";
//import Welcome from "./basemaps/Welcome";

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
      viewBox={props.viewBox}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Basemap"
    >
      {props.path}
    </svg>
  );
};

export default Basemap;
