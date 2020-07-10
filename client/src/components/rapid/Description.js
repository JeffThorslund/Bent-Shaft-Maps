import React from "react";
import filterRange from "../../tools/filterRange";

function Description(props) {
  let description = props.desc
    .filter((element) => filterRange(props.level, element.range))
    .map((element) => element.text);

  return <div>{description}</div>;
}

export default Description;
