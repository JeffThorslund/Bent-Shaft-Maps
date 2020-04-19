import React from "react";
import Caution from "./Caution";

const Symbols = (props) => {
  const caution = props.data.symbols
    .filter((sym) => sym.type === "Caution")
    .map((sym, key) => {
      return (
        <Caution
          symbols={sym}
          key={`symbol${key}`}
          displayData={props.displayData}
        />
      );
    });

  console.log(props.length);

  return <>{props.length === 0 && caution}</>;
};

export default Symbols;
