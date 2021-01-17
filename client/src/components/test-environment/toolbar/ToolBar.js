import React from "react";
import { Form, Button } from "react-bootstrap";

const ToolBar = (props) => (
	<Form className="d-inline-flex flex-column border m-1">
		<div className="p-2">
			<Form.Check
				type={"checkbox"}
				label={`Show Handles`}
				checked={props.areHandlesVisible.value}
				onChange={props.areHandlesVisible.set}
			/>
		</div>

		<div className="border-top p-2">
			<Form.Check
				type={"checkbox"}
				label={"Show Lines"}
				checked={props.areLinesVisible.value}
				onChange={props.areLinesVisible.set}
			/>
			<Form.Check
				type={"checkbox"}
				label={"Show Eddys"}
				checked={props.areEddysVisible.value}
				onChange={props.areEddysVisible.set}
			/>
			<Form.Check
				type={"checkbox"}
				label={"Show Index"}
				checked={props.areIndexVisible.value}
				onChange={props.areIndexVisible.set}
			/>
		</div>
		<Button
			variant="primary"
			style={{ position: "absolute", top: 140, width: 139 }}
			onClick={() => props.toggleMenu()}
		>
			Add Feature
		</Button>
	</Form>
);

export default ToolBar;
