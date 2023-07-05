export const ID = "viewport";

export function create(width, height) {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const context = canvas.getContext("2d");
	if (context === null) {
		throw new Error("Invalid canvas context");
	}
	context.imageSmoothingEnabled = false;
	return {
		canvas,
		context,
	};
}

export function autoSize(viewport) {
	const canvas = viewport.canvas;

	// Viewport width
	const width = window.innerWidth;
	const height = window.innerHeight;

	// Determine scale while maintaining aspect ratio
	const scale = Math.min(width / canvas.width, height / canvas.height);

	// Calculate centered position for scaled canvas
	const left = width / 2 - (canvas.width / 2) * scale;
	const top = height / 2 - (canvas.height / 2) * scale;

	// Apply styles
	canvas.style.width = `${canvas.width * scale}px`;
	canvas.style.height = `${canvas.height * scale}px`;
	canvas.style.left = `${left}px`;
	canvas.style.top = `${top}px`;
}
