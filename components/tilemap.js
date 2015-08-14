var assets = require("../assets");

exports.render = function (ctx) {
	var tilemap = this.tilemap;
	var image = assets.get(tilemap.image);
	var map = tilemap.map;
	var size = tilemap.size;
	var width = Math.floor(image.width / size);
	for (var y = 0; y < map.length; ++y) {
		var row = map[y];
		for (var x = 0; x < row.length; ++x) {
			var index = row[x];
			var sx = index % width;
			var sy = Math.floor(index / width);
			ctx.drawImage(
				image,
				sx * size, sy * size, size, size,
				x * size, y * size, size, size
			);
		}
	}
};
