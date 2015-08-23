var canvas = require("./canvas");
var entities = require("./entities");

var stage;
var ctx;

var resize = function () {
	var clientWidth = window.innerWidth;
	var clientHeight = window.innerHeight;
	var ratioX = clientWidth / stage.width;
	var ratioY = clientHeight / stage.height;
	var scale = Math.min(ratioX, ratioY);

	var style = stage.style;
	style.position = "absolute";
	style.transformOrigin = "0 0";
	style.transform = "scale(" + scale + "," + scale + ")";
	style.left = Math.round(clientWidth / 2 - (stage.width * scale) / 2) + "px";
	style.top = Math.round(clientHeight / 2 - (stage.height * scale) / 2) + "px";
};

exports.init = function (width, height) {
	stage = canvas.create(width, height);
	document.body.appendChild(stage);
	ctx = stage.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	resize();
	window.addEventListener("resize", resize, false);
};

exports.clear = function (fill) {
	ctx.fillStyle = fill;
	ctx.fillRect(0, 0, stage.width, stage.height);
};

exports.render = function (camera) {
	this.clear("dodgerblue");

	var list = entities.get();
	for (var i = 0; i < list.length; ++i) {
		var entity = list[i];
		ctx.save();
		entities.trigger(entity, "render", [ctx, camera]);
		ctx.restore();
	}
};
