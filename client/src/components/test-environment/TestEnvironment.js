import React from "react";
import { useSelector } from "react-redux";
import store from "../../rematch/store";
import Features from "../shared/Features";
import ToolBar from "./toolbar/ToolBar";
import { useToggle } from "../_utils";

const TestEnvironment = () => {
  
  //Set your prefered /test-env settings below
  const areHandlesVisible = useToggle(true);
  const areLinesVisible = useToggle(0);
  const areEddysVisible = useToggle(0);
  const areHydraulicsVisible = useToggle(true);

  const { dispatch } = store;
  const rapid = useSelector((state) => state.testEnvironment);
  const level = 0;

  return (
    <>
      <Features
        rapid={rapid}
        level={level}
        reducers={dispatch.testEnvironment}
        areHandlesVisible={areHandlesVisible}
        areLinesVisible={areLinesVisible}
        areEddysVisible={areEddysVisible}
        areHydraulicsVisible={areHydraulicsVisible}
      />
      <ToolBar
        areHandlesVisible={areHandlesVisible}
        areLinesVisible={areLinesVisible}
        areEddysVisible={areEddysVisible}
        areHydraulicsVisible={areHydraulicsVisible}
      />
    </>
  );
};

export default TestEnvironment;
