var utils = require("./utils");

var components = {};
var prefabs = {};

var entities = [];

exports.init = function (componentData, prefabData) {
	components = componentData;
	prefabs = prefabData;
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

exports.triggerAll = function (method, args) {
	for (var i = 0; i < entities.length; ++i) {
		exports.trigger(entities[i], method, args);
	}
};

exports.add = function (entity) {
	entities.push(entity);
	// exports.trigger(entity, "add");
	return entity;
};

exports.spawn = function (key) {
	// TODO: Handle missing prefab key
	var entity = utils.clone(prefabs[key]);
	return exports.add(entity);
};
