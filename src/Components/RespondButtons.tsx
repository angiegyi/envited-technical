import React from "react";
import going from "../Assets/going.png";
import maybe from "../Assets/maybe.png";
import not_going from "../Assets/not_going.png";

const RespondButtons = () => {
	return (
		<div
			style={{
				height: "13vh",
				alignSelf: "center",
			}}
		>
			<img
				style={{ height: "6em", width: "6em" }}
				src={going}
				alt="going"
			></img>
			<img
				style={{ height: "6em", width: "6em" }}
				src={maybe}
				alt="maybe"
			></img>
			<img
				style={{ height: "6em", width: "6em" }}
				src={not_going}
				alt="not going"
			></img>
		</div>
	);
};

export default RespondButtons;
