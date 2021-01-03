import React from "react";
import { Table } from "react-bootstrap";
import Line from "../rapid/Line";
import { useSelector } from "react-redux";
import Point from "../shared/Point";
import Cubic from "../shared/Cubic";
import { buildPath, useDrag, useMousePosition } from "../shared/_utils";
import store from "../../rematch/store";
import SVG from "../shared/SVG";
import Features from "../shared/Features";

const TestEnvironment = () => {
  const { dispatch } = store;

  const rapid = useSelector((state) => state.testEnvironment);

  const level = 0;

  return (
    <Features
      rapid={rapid}
      level={level}
      reducers={dispatch.testEnvironment}
      showHandles={true}
    />
  );
};

export default TestEnvironment;
