import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "../Atomic/Button";
import { makeStyles } from "@mui/styles";
import background from "../Assets/envited_background.png";
import { FormField } from "./FormField";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	bg: {
		backgroundImage: `url(${background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",

		height: "100vh",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	root: {
		display: "flex",
		alignItems: "center",
	},
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	heading: {
		color: "rgba(86, 43, 64, 0.77)",
	},
	subtitle: {
		color: "#886F70",
		fontWeight: "700",
	},
	button: {
		width: "13em",
		height: "3em",
		filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
	},
});

const CreateEvent = () => {
	const classes = useStyles();
	const [textValue, setTextValue] = useState<string>("");
	const [hostName, setHostName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [startTime, setStartTime] = useState<string>("");
	const [endTime, setEndTime] = useState<string>("");

	const onTextChange = (e: any) => setTextValue(e.target.value);
	const onHostNameChange = (e: any) => setHostName(e.target.value);
	const onLocationChange = (e: any) => setLocation(e.target.value);
	const onSetStartTime = (e: any) => setStartTime(e.target.value);
	const onSetEndTime = (e: any) => setEndTime(e.target.value);

	return (
		<div className={classes.bg}>
			<Typography
				variant="h1"
				align="center"
				sx={{
					color: "#FFFFFF",
					maxWidth: "70%",
					alignSelf: "center",
					marginBottom: "1em",
				}}
			>
				Create your Event 🎉
			</Typography>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignSelf: "center",
				}}
			>
				<FormField
					title="Event Name"
					onChange={onTextChange}
					value={textValue}
				></FormField>

				<FormField
					title="Host Name"
					onChange={onHostNameChange}
					value={hostName}
				></FormField>

				<FormField
					title="Event Location"
					onChange={onLocationChange}
					value={location}
				></FormField>

				<FormField
					title="Start Time"
					onChange={onSetStartTime}
					value={startTime}
					type="datetime-local"
				></FormField>

				<FormField
					title="End Time"
					onChange={onSetEndTime}
					value={endTime}
					type="datetime-local"
				></FormField>

				<div style={{ marginTop: "2em" }}>
					<Link
						to={`/view?title=${textValue}&hostName=${hostName}&location=${location}&startTime=${startTime}&endTime=${endTime}`}
					>
						<Button color="#06D6A0" width="6em" onClick={() => {}}>
							<Typography variant="body1" sx={{ color: "#FFFFFF" }}>
								Next
							</Typography>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;
