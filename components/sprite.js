var assets = require("../assets");

exports.render = function (ctx) {
	var sprite = this.sprite;
	var size = sprite.size;
	var image = assets.get(sprite.image);
	var width = Math.floor(image.width / size);
	var sx = sprite.index % width;
	var sy = Math.floor(sprite.index / width);
	ctx.drawImage(
		image,
		sx * size, sy * size, size, size,
		-size / 2, -size / 2, size, size
	);
};
