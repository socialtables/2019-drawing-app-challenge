import React from "react";

export default function Eraser({eraserOptions, setEraserOptions}) {

	return(
		<div>
			<h1>Eraser</h1>
			<section>
				<label>
					Stroke Width: {eraserOptions.strokeWidth}
					<input
						value={eraserOptions.strokeWidth}
						onChange={e => setEraserOptions({...eraserOptions, strokeWidth: e.target.value})}
						type="range"
						name="stroke-width"
						max="100"
						min="1"
					/>
				</label>
			</section>
		</div>
	);
}