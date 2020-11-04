import React from "react";
import { useDispatch } from "react-redux";

const Activity = props => {
	const dispatch = useDispatch();
	const deleteActivity = () => {
		dispatch({
			type: "DELETE_ACTIVITY",
			payload: {
				id: props.id
			}
		});
	};

	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.duration}</td>

			<td>
				<button onClick={deleteActivity}>Delete</button>
			</td>
		</tr>
	);
};

export default Activity;
