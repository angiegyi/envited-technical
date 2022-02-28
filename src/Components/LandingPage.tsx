import React from "react";
import { Color } from "../Atomic/Colors";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import background from "../Assets/envited_background.png";
import create_event_button from "../Assets/create_event.png";
import navbar from "../Assets/nav_bar.png";
import product_image_left from "../Assets/product_image_left.png";
import product_image_right from "../Assets/product_image_left.png";
import product_image_center from "../Assets/product_image_center.png";
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
		flexWrap: "wrap",
	},
	mainContent: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		textAlign: "center",
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
	image: {
		width: "13em",
		height: "3em",
		filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
	},
});

const LandingPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.bg}>
			<div className={classes.mainContent}>
				{/* banner section */}
				<div style={{ alignSelf: "flex-start" }}>
					<img
						src={navbar}
						style={{ width: "100%", marginBottom: "2em" }}
					></img>
				</div>

				<Typography
					variant="h1"
					sx={{ marginBottom: ".5em", color: "#FFFFFF", maxWidth: "70%" }}
				>
					Facebook events without Facebook.
				</Typography>
				<Typography
					variant="body1"
					sx={{ marginBottom: "2em", color: "#FFFFFF", maxWidth: "70%" }}
				>
					Easily host and share events with your friends across any social
					media.
				</Typography>

				<Link to={`/create`}>
					<button style={{ background: "none", border: "none" }}>
						<img
							src={create_event_button}
							className={classes.image}
							alt="create event button"
						></img>
					</button>
				</Link>

				{/* grid section */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						textAlign: "center",
					}}
				>
					<img
						src={product_image_left}
						style={{ width: "10em", marginLeft: "3em" }}
					></img>
					<img
						src={product_image_center}
						style={{
							width: "18em",
							height: "25em",
							margin: "0 -100px",
							alignSelf: "center",
						}}
					></img>
					<img
						src={product_image_right}
						style={{ width: "10em", marginLeft: "30px", marginRight: "1em" }}
					></img>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
