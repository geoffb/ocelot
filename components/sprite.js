var assets = require("../assets");

exports.render = function (ctx) {
	var sprite = this.sprite;
	var image = assets.get(sprite.path);
	var x = -Math.round(image.width / 2);
	var y = -Math.round(image.height / 2);
	ctx.globalAlpha = sprite.alpha;
	ctx.drawImage(image, x, y);
};
