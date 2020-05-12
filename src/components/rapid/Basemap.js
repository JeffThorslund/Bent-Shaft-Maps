import React, { Suspense, lazy } from "react";
import { pascalCase, paramCase } from "change-case";

const style = {
  position: "absolute",
  zIndex: "-1",
  top: "0px",
  left: "0px",
};

const Basemap = (props) => {
  const VectorMap = React.lazy(() =>
    import(
      `../../river-data/${paramCase(props.riverName)}/maps/${pascalCase(
        props.rapidName
      )}`
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default Basemap;
