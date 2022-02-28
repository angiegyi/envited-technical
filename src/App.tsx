import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Atomic/Theme";
import CreateEvent from "./Components/CreateEvent";
import ViewEvent from "./Components/ViewEvent";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Routes>
						<Route path="/view" element={<ViewEvent />}></Route>
						<Route path="/create" element={<CreateEvent />}></Route>
						<Route path="/" element={<LandingPage />}></Route>
					</Routes>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
