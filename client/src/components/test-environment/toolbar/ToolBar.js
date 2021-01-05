import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ToolBar = (props) => {
	return (
		<ButtonGroup>
			<Button onClick={() => props.toggleHandles()} variant="outline-primary">
				Show Handles
			</Button>
			<Button>Add Point</Button>
		</ButtonGroup>
	);
};

export default ToolBar;
