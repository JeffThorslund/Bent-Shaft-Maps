import React, { Suspense, lazy } from "react";
import { pascalCase, paramCase } from "change-case";

const style = {
  position: "absolute",
  zIndex: "-1",
  top: "0px",
  left: "0px",
};

const Basemap = (props) => {
  let name = paramCase(props.name);
  let rapidName = pascalCase(props.rapidName);
  const VectorMap = React.lazy(() =>
    import(`../../river-data/${name}/maps/${rapidName}`)
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
  );
};

export default Basemap;
