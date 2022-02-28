import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

interface EmojiBoxProps {
	emoji: string;
	emojiType: any;
	children?: React.ReactNode;
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
	},
	emoji: {
		padding: "15px",
	},
	children: {
		color: "#501FC1",
	},
});

const EmojiBox = (props: EmojiBoxProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				<Typography variant={props.emojiType} className={classes.emoji}>
					{props.emoji}
				</Typography>
			</div>
			<div>{props.children}</div>
		</div>
	);
};

export default EmojiBox;
