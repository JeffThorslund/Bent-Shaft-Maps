import React from "react";
import { useSelector } from "react-redux";
import store from "../../rematch/store";
import Features from "../shared/Features";
import ToolBar from "./toolbar/ToolBar";
import { useToggle } from "../_utils";

const TestEnvironment = () => {
  const { dispatch } = store;
  const [areHandlesVisible, setAreHandlesVisible] = useToggle(true);
  const rapid = useSelector((state) => state.testEnvironment);
  const level = 0;

  return (
    <>
      <Features
        rapid={rapid}
        level={level}
        reducers={dispatch.testEnvironment}
        areHandlesVisible={areHandlesVisible}
      />
      <ToolBar setAreHandlesVisible={setAreHandlesVisible} />
    </>
  );
};

export default TestEnvironment;
