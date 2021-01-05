import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../rematch/store";
import Features from "../shared/Features";
import ToolBar from "./toolbar/ToolBar";
//import Image from "react-bootstrap/Image";

const TestEnvironment = () => {
	const { dispatch } = store;

	const [handles, setHandles] = useState(false);

	const rapid = useSelector((state) => state.testEnvironment);

	const level = 0;

	return (
		<>
			{/* <Image
        className="basemap"
        src={
          "https://bent-shaft-maps.s3.amazonaws.com/test-environment/rapid_sDPD0-hex.jpg"
        }
        alt="River Map"
      /> */}
			<Features
				rapid={rapid}
				level={level}
				reducers={dispatch.testEnvironment}
				showHandles={handles}
			/>
			<ToolBar toggleHandles={() => setHandles(!handles)} />
		</>
	);
};

export default TestEnvironment;
