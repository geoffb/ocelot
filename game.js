var stage = require("./stage");
var time = require("./time");
var entities = require("./entities");
var tween = require("./tween");

var keys = {};

var scenes = {};
var activeScene = null;

var update = function (dt) {
	activeScene.update(dt, keys);
	entities.triggerAll("update", [dt, keys]);
	tween.update(dt);
	stage.render();
};

var keydown = function (e) {
	keys[e.keyCode] = true;
};

var keyup = function (e) {
	keys[e.keyCode] = false;
};

exports.init = function (config) {
	stage.init(config.width, config.height);
	scenes = config.scenes;
	entities.init(config.components, config.prefabs);

	window.addEventListener("keydown", keydown, false);
	window.addEventListener("keyup", keyup, false);
};

exports.loadScene = function (key) {
	activeScene = scenes[key];
	activeScene.start();
};

exports.start = function () {
	time.start(update);
};
