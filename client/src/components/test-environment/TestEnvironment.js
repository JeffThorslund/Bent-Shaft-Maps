import React from "react";
import { Table } from "react-bootstrap";
import Line from "../shared/Line";
import { useSelector } from "react-redux";

const TestEnvironment = () => {
  const { lines } = useSelector((state) => state.testEnvironment);

  return (
    <>
      <svg
        className="Features"
        id="vector-container"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {lines.map((line, i) => (
          <Line line={line} environment={"testEnvironment"} key={i} />
        ))}
      </svg>
    </>
  );
};

export default TestEnvironment;
