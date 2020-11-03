import React, { useState } from "react";

const AddActivity = () => {
	const [data, setData] = useState({});

	const handleChange = e => {
		e.persist();
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div className={"add"}>
			<div className="input-section">
				<p>Activity:</p>
				<input
					onChange={e => handleChange(e)}
					name="name"
					placeholder="activity name "
					type="text"
				/>
			</div>
			<div className="input-section">
				<p>Duration:</p>
				<input
					onChange={e => handleChange(e)}
					name="duration"
					placeholder="duration"
					type="text"
				/>
			</div>
		</div>
	);
};

export default AddActivity;
