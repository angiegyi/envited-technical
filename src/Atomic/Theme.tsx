import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export enum Color {
	BLUE = "#255DCA",
	BLACK = "#242C3D",
	PURE_BLACK = "#000000",
	DARK_GREY = "#425780",
	WHITE = "#ffffff",
	RED = "#e99c9c",
	GREEN = "#ACE4AA",
	YELLOW = "#fcff68",
	LIGHT_BLUE = "#F6FBFF",
	RESULT_BORDER = "#8CCAFF",
}

let theme = createTheme({
	typography: {
		fontFamily: "Open Sans",
		h1: {
			fontWeight: "800",
			fontSize: "70pxx",
		},
		body1: {
			fontWeight: "bold",
			fontSize: "18px",
		},
		h2: {
			fontWeight: "bold",
			fontSize: "65px",
		},
		h5: {
			fontWeight: "bold",
			fontSize: "18px",
		},
		h6: {
			fontWeight: "bold",
			fontSize: "18px",
			color: "#501FC1",
		},
		body2: {
			fontWeight: "normal",
			fontSize: "15px",
			color: "rgba(80, 31, 193, 0.5);",
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
