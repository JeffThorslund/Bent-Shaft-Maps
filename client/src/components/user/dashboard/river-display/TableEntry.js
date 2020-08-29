import React from "react";

function TableEntry({ river }) {
  return (
    <tr>
      <td scope="row">{river}</td>
      <td>
        <div className="btn btn-secondary">Edit the {river} river</div>
      </td>
    </tr>
  );
}

export default TableEntry;
