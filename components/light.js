var canvas = require("../canvas");

var buffer = canvas.create(1, 1);
var bctx = buffer.getContext("2d");

exports.render = function (ctx) {
	var light = this.light;
	var r = light.radius;
	var size = r * 2;
	buffer.width = size;
	buffer.height = size;
	var gradient = bctx.createRadialGradient(r, r, 0, r, r, r);
	gradient.addColorStop(0, "rgba(255, 0, 255, 0.5)");
	gradient.addColorStop(1, "rgba(255, 0, 255, 0)");
	bctx.fillStyle = gradient;
	bctx.fillRect(0, 0, size, size);
	ctx.save();
	ctx.globalCompositeOperation = "lighter";
	ctx.drawImage(buffer, -r, -r);
	ctx.restore();
};
