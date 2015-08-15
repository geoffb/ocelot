var canvas = require("../canvas");
var color = require("../utils/color");

var buffer = canvas.create(1, 1);
var bctx = buffer.getContext("2d");

exports.render = function (ctx) {
	var light = this.light;
	var r = light.radius;
	var size = r * 2;
	buffer.width = size;
	buffer.height = size;
	var gradient = bctx.createRadialGradient(r, r, 0, r, r, r);
	gradient.addColorStop(0, color.rgba(light.color, light.intensity));
	gradient.addColorStop(1, color.rgba(light.color, 0));
	bctx.fillStyle = gradient;
	bctx.fillRect(0, 0, size, size);
	ctx.save();
	ctx.globalCompositeOperation = "lighter";
	ctx.drawImage(buffer, -r, -r);
	ctx.restore();
};
