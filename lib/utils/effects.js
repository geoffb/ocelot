var tween = require("../tween");

exports.pulse = function (entity) {
	var transform = entity.transform;
	tween.create(transform, {
		sx: 1.25,
		sy: 1.25
	}, 125);
	tween.create(transform, {
		sx: 1,
		sy: 1
	}, 125, 125);
};

exports.negate = function (entity) {
	// TODO: Param for distance, duration, number of shakes
	var transform = entity.transform;
	tween.create(transform, {
		x: transform.x - 1
	}, 50);
	tween.create(transform, {
		x: transform.x + 1
	}, 100, 50);
	tween.create(transform, {
		x: transform.x
	}, 50, 150);
};
