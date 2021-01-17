import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button } from "react-bootstrap";
import { useMousePosition } from "../../shared/_utils";

const ContextMenu = (props) => {
	const [type, setType] = useState("");
	const { register, handleSubmit } = useForm({});
	const { show, x, y } = props.state;
	const coords = useMousePosition();
	const onSubmit = (data) => {
		data.type = type;
		data.coords = coords;
		props.reducers.addFeature(data);
		props.close();
	};
	return (
		<Card
			className={show ? "context" : "context hide"}
			style={{ top: y, left: x }}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="form-label">Add New Feature</label>
				<input
					className="form-control"
					ref={register}
					name="name"
					placeholder="Name"
				/>
				<textarea
					className="form-control"
					ref={register}
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
				<Button variant="outline-danger" onClick={() => props.close()}>
					Cancel
				</Button>
			</form>
		</Card>
	);
};

export default ContextMenu;
