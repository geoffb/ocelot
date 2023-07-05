export function image(path) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = path;
		img.onload = () => resolve(img);
	});
}
