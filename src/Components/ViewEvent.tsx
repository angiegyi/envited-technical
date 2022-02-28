import React from "react";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "../Atomic/Button";
import CoverPhoto from "../Assets/CoverPhoto.png";
import EmojiBox from "./EmojiBox";
import RespondButtons from "./RespondButtons";

const useStyles = makeStyles({
	bg: {
		height: "100vh",
		width: "100%",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "flex-start",
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
	coverPhoto: {
		backgroundImage: `url(${CoverPhoto})`,
		width: "100%",
		height: "25vh",
		position: "relative",
		marginBottom: "2em",
	},
	eventMenu: {
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
	},
	inviteBtn: {
		flex: 1,
	},
	purple: {
		color: "#501FC1",
	},
	lightPurple: {
		color: "rgba(80, 31, 193, 0.3)",
	},
});

function useQuery() {
	const { search } = useLocation();
	return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ViewEvent = () => {
	const classes = useStyles();
	let query = useQuery();

	return (
		<>
			<div className={classes.bg}>
				<div className={classes.coverPhoto}></div>
				<div style={{ display: "flex", marginLeft: "2em" }}>
					<EmojiBox emoji="🎉" emojiType="h1">
						<div>
							<Typography variant="h2" className={classes.purple}>
								{query.get("title")}
							</Typography>
							<Typography variant="subtitle1" className={classes.lightPurple}>
								{`Hosted by ${query.get("hostName")}`}
							</Typography>
						</div>
					</EmojiBox>
				</div>

				<RespondButtons />

				<div className={classes.eventMenu} style={{ marginRight: "2em" }}>
					<Button width="60vw" margin="0 10px">
						<Typography variant="h6">
							<b>✉️ Invite a friend</b>
						</Typography>
					</Button>
					<Button>
						<Typography width="10vw" margin="0 10px">
							...
						</Typography>
					</Button>
				</div>

				<div
					style={{
						alignSelf: "flex-start",
						marginTop: "2em",
						marginLeft: "2em",
					}}
				>
					<EmojiBox emoji="📅" emojiType="h6">
						<div>
							<Typography variant="h6">{query.get("startTime")}</Typography>
							<Typography variant="h6">{`to ${query.get(
								"endTime"
							)}`}</Typography>
							<Typography variant="body2">Add to calendar</Typography>
						</div>
					</EmojiBox>
					<br></br>

					<EmojiBox emoji="📍" emojiType="h6">
						<div>
							<Typography variant="h6">{query.get("location")}</Typography>
							<Typography variant="body2">Open in maps</Typography>
						</div>
					</EmojiBox>
				</div>

				<div
					className={classes.eventMenu}
					style={{ margin: "2em 4em 1em 3em" }}
				>
					<Button
						color="rgba(114, 77, 249, 0.3)"
						width="14em"
						height="2em"
						margin="0 .5em 0 1em"
					>
						Details
					</Button>
					<Button width="13em" margin="0 1em 0 1em">
						Posts
					</Button>
				</div>
				<Typography
					variant="body2"
					sx={{ color: "#757575", marginLeft: "1em" }}
				>
					Just a lowkey dinner to celebrate my 22nd. Would love to see you
				</Typography>
			</div>
		</>
	);
};

export default ViewEvent;
