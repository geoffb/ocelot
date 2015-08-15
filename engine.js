var stage = require("./stage");
var time = require("./time");
var entities = require("./entities");
var tween = require("./tween");

var update = function (dt) {
	var list = entities.get();
	for (var i = 0; i < list.length; ++i) {
		//var entity = list[i];
		entities.trigger(list[i], "update", [dt]);
	}

	tween.update(dt);

	stage.render();
};

exports.init = function (width, height) {
	stage.init(width, height);
	entities.init();
};

exports.start = function () {
	time.start(update);
};
