var stage = require("./stage");
var time = require("./time");
var entities = require("./entities");
var tween = require("./tween");

var keys = {};

var scenes = {};
var activeScene = null;

var camera = {
	x: 0, y: 0, width: 0, height: 0
};

var followTarget = null;

var update = function (dt) {
	activeScene.update(dt, keys);
	entities.triggerAll("update", [dt, keys]);
	tween.update(dt);

	if (followTarget) {
		camera.x = Math.round(followTarget.transform.x - camera.width / 2);
		camera.y = Math.round(followTarget.transform.y - camera.height / 2);
	}

	stage.render(camera);
};

var keydown = function (e) {
	keys[e.keyCode] = true;
};

var keyup = function (e) {
	keys[e.keyCode] = false;
};

exports.init = function (config) {
	camera.width = config.width;
	camera.height = config.height;
	stage.init(camera.width, camera.height);
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

exports.setCameraFollowTarget = function (entity) {
	followTarget = entity;
};
