import React from 'react';
// REDUX
import { useSelector } from 'react-redux';
import store from '../../rematch/store';
// UTILS
import { useToggle } from '../_utils';
// COMPONENTS
import Features from '../shared/Features';
import ToolBar from './toolbar/ToolBar';

const TestEnvironment = () => {
  // Set your prefered /test-env settings below
  const areLinesVisible = useToggle(false);
  const areEddysVisible = useToggle(false);
  const areHydraulicsVisible = useToggle(true);
  const areIndexVisible = useToggle(true);
  const areHandlesVisible = useToggle(true);
  
  const { dispatch } = store;
  const rapid = useSelector((state) => state.testEnvironment);
  const level = 0;

  return (
    <div>
      <Features
        rapid={rapid}
        level={level}
        reducers={dispatch.testEnvironment}
        areHandlesVisible={areHandlesVisible}
        areLinesVisible={areLinesVisible}
        areEddysVisible={areEddysVisible}
        areHydraulicsVisible={areHydraulicsVisible}
        areIndexVisible={areIndexVisible}
      />
      <ToolBar
        areHandlesVisible={areHandlesVisible}
        areLinesVisible={areLinesVisible}
        areEddysVisible={areEddysVisible}
        areHydraulicsVisible={areHydraulicsVisible}
        areIndexVisible={areIndexVisible}
        reducers={dispatch.testEnvironment}
      />
    </div>
  );
};

export default TestEnvironment;
