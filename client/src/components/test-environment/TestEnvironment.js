import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../rematch/store";
import Features from "../shared/Features";
import ToolBar from "./toolbar/ToolBar";
import { useToggle } from "../_utils";
import ContextMenu from "./toolbar/ContextMenu";

const TestEnvironment = () => {
	const [menu, setMenu] = useState({ show: false });
	//Set your prefered /test-env settings below
	const areHandlesVisible = useToggle(true);
	const areLinesVisible = useToggle(true);
	const areEddysVisible = useToggle(true);

	const { dispatch } = store;
	const rapid = useSelector((state) => state.testEnvironment);
	const level = 0;

	return (
		<div
			onContextMenu={(e) => setMenu({ show: true, x: e.pageX, y: e.pageY })}
			onClick={() => setMenu({ show: false })}
		>
			<ContextMenu state={menu} reducers={dispatch.testEnvironment} />
			<Features
				rapid={rapid}
				level={level}
				reducers={dispatch.testEnvironment}
				areHandlesVisible={areHandlesVisible}
				areLinesVisible={areLinesVisible}
				areEddysVisible={areEddysVisible}
			/>
			<ToolBar
				areHandlesVisible={areHandlesVisible}
				areLinesVisible={areLinesVisible}
				areEddysVisible={areEddysVisible}
			/>
		</div>
	);
};

export default TestEnvironment;
