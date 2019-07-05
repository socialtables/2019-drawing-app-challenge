import React from "react";

import Pen from "./panels/pen";

export default function ToolPanel({
	activeTool,
	penOptions,
	setPenOptions
}) {
	return (
		<div className="tool-panel">
			<Pen
				penOptions={penOptions}
				setPenOptions={setPenOptions}
			/>
		</div>
	);
}