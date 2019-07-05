import React, { useState } from "react";

import "./app.css";

import NavBar from "./nav-bar";
import ToolPanel from "./tool-panel";
import Canvas from "./canvas";

export default function App() {

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
