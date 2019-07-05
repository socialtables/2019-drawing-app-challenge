import React, { useRef, useState, useEffect } from "react";

export default function Canvas({activeTool, penOptions}) {
	const canvasRef = useRef(null);

	const [isDrawing, setIsDrawing] = useState(false);
	const [ctx, setCtx] = useState(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);

	const getX = (event) => {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - canvasRef.current.offsetLeft;
		}
		else {
			return event.pageX - canvasRef.current.offsetLeft;
		}
	};

	const getY = (event) => {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - canvasRef.current.offsetTop;
		}
		else {
			return event.pageY - canvasRef.current.offsetTop;
		}
	};

	const start = (event) => {
		if (activeTool === "pen") {
			setIsDrawing(true);
			ctx.beginPath();
			ctx.moveTo(getX(event), getY(event));
			event.preventDefault();
		}
	};

	const draw = (event) => {
		if (isDrawing) {
			ctx.lineTo(getX(event), getY(event));
			ctx.lineWidth = penOptions.strokeWidth;
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		event.preventDefault();
	};

	const end = (event) => {
		if (isDrawing) {
			ctx.stroke();
			ctx.closePath();
			setIsDrawing(false);
		}
		event.preventDefault();
	};

	return (
		<canvas
			width={window.innerWidth - 262}
			height={window.innerHeight}
			className="canvas"
			ref={canvasRef}
			onMouseDown={start}
			onMouseMove={draw}
			onMouseUp={end}
		/>
	);
}