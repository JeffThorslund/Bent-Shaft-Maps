import React from "react";
import { Table } from "react-bootstrap";
import Line from "../shared/line";

const TestEnvironment = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
      <svg
        className="Features"
        id="vector-container"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <Line
          pathCommands={[
            {
              type: "M",
              args: [30, 20],
            },
            {
              type: "S",
              args: [40, 20, 60, 30],
            },
            {
              type: "S",
              args: [45, 40, 70, 40],
            },
          ]}
        />
      </svg>
    </>
  );
};

export default TestEnvironment;
