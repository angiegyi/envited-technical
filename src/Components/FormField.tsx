import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

// props: onchange handler, title
interface FormProps {
	onChange: (e: any) => void;
	title: string;
	value: string;
	type?: string;
}

export const FormField = (props: FormProps) => {
	return (
		<>
			<Typography
				variant="body1"
				sx={{
					marginBottom: ".5em",
					color: "#FFFFFF",
					maxWidth: "70%",
					alignSelf: "flex-start",
				}}
			>
				{props.title}
			</Typography>
			<TextField
				onChange={props.onChange}
				value={props.value}
				label=""
				sx={{ marginBottom: "1em", background: "#FFFFFF" }}
				type={props.type}
			/>
		</>
	);
};
