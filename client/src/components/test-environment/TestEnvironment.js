import React from "react";
import { useSelector } from "react-redux";
import store from "../../rematch/store";
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
