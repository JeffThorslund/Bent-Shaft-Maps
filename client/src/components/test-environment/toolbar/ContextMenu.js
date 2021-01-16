import React from "react";
import { Card, Button } from "react-bootstrap";
import { useMousePosition } from "../../shared/_utils";

const ContextMenu = (props) => {
	const { show, x, y } = props.state;
	const coords = useMousePosition();
	return (
		<Card
			className={show ? "context" : "context hide"}
			style={{ top: y, left: x }}
		>
			<Button
				className="btn"
				onClick={() => props.reducers.addFeature({ type: "line", coords })}
			>
				Add Line
			</Button>
			<Button
				className="btn"
				onClick={() => props.reducers.addFeature({ type: "eddy", coords })}
			>
				Add Eddy
			</Button>
		</Card>
	);
};

export default ContextMenu;
