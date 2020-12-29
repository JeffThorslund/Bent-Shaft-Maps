import React from "react";
import { Table } from "react-bootstrap";
import Line from "../shared/Line";
import { useSelector } from "react-redux";

const TestEnvironment = () => {
  const { lines } = useSelector((state) => state.testEnvironment);

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
        {lines.map((line, i) => (
          <Line pathCommands={line} key={i} isTestEnv={true} />
        ))}
      </svg>
    </>
  );
};

export default TestEnvironment;
