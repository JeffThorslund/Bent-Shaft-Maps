import React from "react";
import "../../stylesheets/Basemap.css";

const Basemap = (props) => {
  return <img className="basemap" src={`/api/image/${props.riverMap}`} alt="River Map" />;
};

export default Basemap;
