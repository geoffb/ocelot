var assets = require("../assets");

exports.render = function (ctx, camera) {
	// Tilemap rendering is very optimized and
	// requires that transform.space === "camera"
	var tilemap = this.tilemap;
	var image = assets.get(tilemap.image);
	var map = tilemap.map;
	var size = tilemap.size;
	var width = Math.floor(image.width / size);

	var originX = Math.floor(camera.x / size);
	var originY = Math.floor(camera.y / size);
	var terminusX = Math.ceil((camera.x + camera.width) / size);
	var terminusY = Math.ceil((camera.y + camera.height) / size);
	var offsetX = -camera.x % size;
	var offsetY = -camera.y % size;

	for (var y = originY; y <= terminusY; ++y) {
		if (y < 0 || y >= map.length) { continue; }
		var row = map[y];
		for (var x = originX; x <= terminusX; ++x) {
			if (x < 0 || x >= row.length) { continue; }
			var index = row[x];
			var sx = index % width;
			var sy = Math.floor(index / width);
			var dx = (x - originX) * size + offsetX;
			var dy = (y - originY) * size + offsetY;
			ctx.drawImage(
				image,
				sx * size, sy * size, size, size,
				dx, dy, size, size
			);
		}
	}
};
