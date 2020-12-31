import React from "react";
import { Table } from "react-bootstrap";
import Line from "../rapid/Line";
import { useSelector } from "react-redux";
import Point from "../shared/Point";
import Cubic from "../shared/Cubic";
import { buildPath, useDrag, useMousePosition } from "../shared/_utils";
import store from "../../rematch/store";
import SVG from "../shared/SVG"

const TestEnvironment = () => {

  const environment = "testEnvironment"
  
  const { dispatch } = store;
    const { lines, draggedPoint, draggedCubic } = useSelector(
      (state) => state.testEnvironment
    );

  return <SVG environment={"testEnvironment"}/>
};

export default TestEnvironment;
