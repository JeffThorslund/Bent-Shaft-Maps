import React from "react";
import { Card, Button } from "react-bootstrap";
import { useMousePosition } from "../../shared/_utils";

const ContextMenu = (props) => {
	const { show, x, y } = props.state;
	const coords = useMousePosition();
	const handleAddFeature = (type) => {
		props.reducers.addFeature({ type: type, coords });
	};
	return (
		<Card
			className={show ? "context" : "context hide"}
			style={{ top: y, left: x }}
		>
			<Button className="btn" onClick={() => handleAddFeature("line")}>
				Add Line
			</Button>
			<Button className="btn" onClick={() => handleAddFeature("eddy")}>
				Add Eddy
			</Button>
		</Card>
	);
};

export default ContextMenu;
