import React from "react";

import PenIcon from "./icons/pen-icon";
import EraserIcon from "./icons/eraser-icon";

export default function NavBar({activeTool, setActiveTool}) {
	return (
		<div className="nav-bar">
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("pen")}
				title="Pen"
			>
				<PenIcon />
			</div>
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("eraser")}
				title="Eraser"
			>
				<EraserIcon />
			</div>
		</div>
	);
}