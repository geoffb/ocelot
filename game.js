var stage = require("./stage");
var time = require("./time");
var entities = require("./entities");
var tween = require("./tween");

var keys = {};

var scenes = {};
var activeScene = null;

var update = function (dt) {
	activeScene.update(dt, keys);

	var list = entities.get();
	for (var i = 0; i < list.length; ++i) {
		//var entity = list[i];
		entities.trigger(list[i], "update", [dt, keys]);
	}

	tween.update(dt);

	stage.render();
};

var keydown = function (e) {
	keys[e.keyCode] = true;
};

var keyup = function (e) {
	keys[e.keyCode] = false;
};

exports.init = function (width, height) {
	stage.init(width, height);

	window.addEventListener("keydown", keydown, false);
	window.addEventListener("keyup", keyup, false);

	entities.init();
};

exports.defineScene = function (key, data) {
	scenes[key] = data;
};

exports.loadScene = function (key) {
	activeScene = scenes[key];
	activeScene.start();
};

exports.start = function () {
	time.start(update);
};
