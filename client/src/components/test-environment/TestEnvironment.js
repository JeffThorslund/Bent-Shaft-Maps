import React from "react";
import { useSelector } from "react-redux";
import store from "../../rematch/store";
import Features from "../shared/Features";
import ToolBar from "./toolbar/ToolBar";
import { useToggle } from "../_utils";
import ContextMenu from "./toolbar/ContextMenu";

const TestEnvironment = () => {
	//Set your prefered /test-env settings below
	const areHandlesVisible = useToggle(true);
	const areLinesVisible = useToggle(true);
	const areEddysVisible = useToggle(true);
	const areIndexVisible = useToggle(true);
	const isMenuVisible = useToggle(false);

	const { dispatch } = store;
	const rapid = useSelector((state) => state.testEnvironment);
	const level = 0;

	return (
		<div>
			<ContextMenu
				show={isMenuVisible.value}
				isMenuVisible={() => isMenuVisible.set()}
				reducers={dispatch.testEnvironment}
			/>
			<Features
				rapid={rapid}
				level={level}
				reducers={dispatch.testEnvironment}
				areHandlesVisible={areHandlesVisible}
				areLinesVisible={areLinesVisible}
				areEddysVisible={areEddysVisible}
				areIndexVisible={areIndexVisible}
			/>
			<ToolBar
				areHandlesVisible={areHandlesVisible}
				areLinesVisible={areLinesVisible}
				areEddysVisible={areEddysVisible}
				areIndexVisible={areIndexVisible}
				isMenuVisible={isMenuVisible}
			/>
		</div>
	);
};

export default TestEnvironment;
