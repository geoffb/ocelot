var utils = require("./utils");

// Core components
var transform = require("./components/transform");
var shape = require("./components/shape");
var text = require("./components/text");

var components = {};
var prefabs = {};

var entities = [];

exports.init = function () {
	this.defineComponent("transform", transform);
	this.defineComponent("shape", shape);
	this.defineComponent("text", text);
};

exports.defineComponent = function (key, component) {
	components[key] = component;
};

exports.definePrefab = function (key, prefab) {
	prefabs[key] = prefab;
};

exports.get = function () {
	return entities;
};

exports.trigger = function (entity, method, args) {
	for (var key in entity) {
		var component = components[key];
		if (!component || !component[method]) { continue; }
		component[method].apply(entity, args);
	}
};

exports.spawn = function (key) {
	// TODO: Handle missing prefab key
	var entity = utils.clone(prefabs[key]);
	entities.push(entity);
	return entity;
};
