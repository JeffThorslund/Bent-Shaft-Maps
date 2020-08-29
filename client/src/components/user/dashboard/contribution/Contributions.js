import React from "react";

function Contributions() {
  return (
    <>
      <h1 className="page-header text-center pt-2">My Contributions</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">River Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Ottawa River</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">Nantahala River</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">Ocoee River</th>
            <td>Larry</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Contributions;
