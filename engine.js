var canvas = require("./canvas");
var time = require("./time");
var entities = require("./entities");

var stage;
var ctx;

var update = function (dt) {
	stage.width = stage.width;

	renderEntities(entities);
};

var renderEntities = function (entities) {
	var list = entities.get();
	for (var i = 0; i < list.length; ++i) {
		var entity = list[i];
		ctx.save();
		entities.trigger(entity, "render", [ctx]);
		ctx.restore();
	}
};

exports.init = function (width, height) {
	entities.init();

	stage = canvas.create(width, height);
	ctx = stage.getContext("2d");
	document.body.appendChild(stage);
};

exports.start = function () {
	time.start(update);
};
