import React, { useState } from "react";
import List from "./list.jsx";

const Home = () => {
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState([]);

	const DeleteList = (indexList) => {
		setTasks(() => tasks.filter((value, index) => index !== indexList));
	};

	return (
		<div className="bg-light justify-content-center">
			<p className="title text-center">todos</p>
			<input
				className=" col-4 border-0 shadow p-3"
				type="text"
				onChange={(e) => setInput(e.target.value)}
				value={input}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						input !== "" && input !== " "
							? setTasks([...tasks, input])
							: null;
						setInput("");
					}
				}}
			/>

			<ul className="list-group">
				{tasks.map((task, index) => (
					<List
						key={index}
						inputTask={task}
						quit={() => DeleteList(index)}
					/>
				))}
				;
				<span className="col-4 border-0 shadow p-3 bg-white">
					{tasks.length === 0
						? "No tasks, add a task"
						: tasks.length + " item left"}
				</span>
			</ul>
		</div>
	);
};

export default Home;
