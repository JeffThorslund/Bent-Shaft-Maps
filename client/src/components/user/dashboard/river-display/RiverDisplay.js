import React from "react";
import TableEntry from "./TableEntry";

function RiverDisplay() {
  const riverArr = ["Ottawa", "Toronto", "Mexico"].map((river) => {
    return <TableEntry river={river} />;
  });

  return (
    <>
      <h1>Choose a River to Edit</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">River Name</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{riverArr}</tbody>
      </table>
    </>
  );
}

export default RiverDisplay;
