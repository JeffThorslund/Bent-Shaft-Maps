import React from "react";
import { useKeyPress } from "../shared/_utils";

/**
 * A simple display component that displays a circular point.
 *
 * @param {number} x - The x coord position of the point on a 100x100 layout.
 * @param {number} y - The y coord position of the point on a 100x100 layout.
 */

const Point = ({ featureType, lineIndex, x, y, pointIndex, reducers }) => {
	const isCtrlPressed = useKeyPress("Control");
	return (
		<g>
			<circle
				className="point"
				onMouseDown={(e) => {
					isCtrlPressed
						? reducers.removePoint({ lineIndex, pointIndex })
						: reducers.setDraggedPoint({ lineIndex, pointIndex, featureType });
					e.stopPropagation();
				}}
				cx={x}
				cy={y}
				r={1}
			/>
			<text
				fontSize={"2px"}
				strokeWidth={"0.01"}
				fill="white"
				stroke="white"
				x={x - 1.5}
				y={y + 0.5}
			>
				{pointIndex}
			</text>
		</g>
	);
};

export default Point;
