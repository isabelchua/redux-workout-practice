import React, { useState } from "react";
import Activity from "./Activity";
import { useSelector } from "react-redux";
import AddActivity from "./AddActivity";

const Workouts = () => {
	// const state = useSelector(state => state);
	const allActivities = useSelector(state => state.activities);
	const [add, setAdd] = useState(false);
	// console.log("state", state);

	return (
		<div className={"workouts-wrapper"}>
			<h2>Workouts</h2>
			<button onClick={() => setAdd(!add)}>Add Activity</button>
			{add && <AddActivity />}
			{allActivities.map(activity => {
				console.log(activity);
				return (
					<Activity
						key={activity.id}
						name={activity.name}
						duration={activity.duration}
						id={activity.id}
					/>
				);
			})}
		</div>
	);
};

export default Workouts;
