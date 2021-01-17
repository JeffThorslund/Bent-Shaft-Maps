import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button } from "react-bootstrap";
import { useMousePosition } from "../../shared/_utils";

const ContextMenu = (props) => {
	const coords = useMousePosition();
	// Differ Feature Type to Create
	const [type, setType] = useState("");
	// Form Handler
	const { register, handleSubmit } = useForm({});
	// Handle Info Submition
	const onSubmit = (data) => {
		// Compose Payload for Reducer
		data.type = type;
		data.coords = coords;
		// Send Data
		props.reducers.addFeature(data);
		// Close Menu
		props.isMenuVisible();
	};
	return (
		<Card className={props.show ? "context" : "context hide"}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="form-label">Add New Feature</label>
				<input
					className="form-control"
					ref={register}
					required={true}
					name="name"
					placeholder="Name"
				/>
				<textarea
					className="form-control"
					ref={register}
					required={true}
					rows={10}
					name="desc"
					placeholder="Description..."
				/>
				<Button
					type="submit"
					variant="outline-primary"
					onClick={() => setType("line")}
				>
					Add Line
				</Button>
				<Button
					type="submit"
					variant="outline-primary"
					onClick={() => setType("eddy")}
				>
					Add Eddy
				</Button>
				<Button
					variant="outline-danger"
					onClick={(e) => props.isMenuVisible(e)}
				>
					Close
				</Button>
			</form>
		</Card>
	);
};

export default ContextMenu;
