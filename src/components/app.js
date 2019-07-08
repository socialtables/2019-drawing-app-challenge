import React, { useState } from "react";

import "./app.css";

import NavBar from "./nav-bar";
import ToolPanel from "./tool-panel";
import Canvas from "./canvas";

export default function App() {

	/*
		If the syntax below (`useState(...)` etc.) looks unfamiliar to you,
		check out the docs on "React Hooks" we link to in the Resources section of the README.
	*/
	const [activeTool, setActiveTool] = useState("pen");
	const [penOptions, setPenOptions] = useState({
		strokeWidth: 10,
		lineType: "solid",
	});

	return(
		<React.Fragment>
			<NavBar
				activeTool={activeTool}
				setActiveTool={setActiveTool}
			/>
			<ToolPanel
				activeTool={activeTool}
				penOptions={penOptions}
				setPenOptions={setPenOptions}
			/>
			<Canvas
				activeTool={activeTool}
				penOptions={penOptions}
			/>
		</React.Fragment>
	);
}
