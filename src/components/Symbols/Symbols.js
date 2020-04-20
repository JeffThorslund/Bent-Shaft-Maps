import React from "react";
import Portage from "./Portage";

const Symbols = (props) => {
  const portageArray = props.data.symbols
    .filter((sym) => sym.type === "Portage")
    .map((sym, key) => {
      return (
        <Portage
          symbols={sym}
          key={`symbol${key}`}
          displayData={props.displayData}
        />
      );
    });

  return <>{portageArray}</>;
};

export default Symbols;
