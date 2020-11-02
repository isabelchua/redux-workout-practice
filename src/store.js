import { createStore } from "redux";

const store = createStore();

const reducer = {
	activities: [
		{
			id: 1,
			name: "gym",
			duration: "1 hour"
		}
	],
	people: [
		{
			id: 1,
			name: "John Doe"
		}
	]
};
