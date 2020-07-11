import React from "react";
import { paramCase } from "change-case";
import loadable from "@loadable/component";
import "./Basemap.css";

const style = {
  position: "absolute",
  zIndex: "-1",
  top: "0px",
  left: "0px",
};

const Basemap = (props) => {
  /*let name = paramCase(props.name);
  const VectorMap = loadable(() =>
    import(`../../river-data/${name}/maps/${props.path}`)
  );

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
      <VectorMap />
    </svg>
  );*/

  return <img className="basemap" src="/api/image/01399079da7a246d20123ce8ec58a32c.png" alt="Red dot" />;
};

export default Basemap;
