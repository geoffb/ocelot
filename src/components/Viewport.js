export const ID = "viewport";

export function create(width, height) {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const context = canvas.getContext("2d");
	if (context === null) {
		throw new Error("Invalid canvas context");
	}
	return {
		canvas,
		context,
	};
}
