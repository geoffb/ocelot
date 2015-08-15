var easing = require("./utils/easing");

var tweens = [];

exports.create = function (target, to, duration) {
	var from = {};
	for (var key in to) {
		from[key] = target[key];
	}
	tweens.push({
		target: target,
		from: from,
		to: to,
		duration: duration,
		elapsed: 0
	});
};

exports.update = function (dt) {
	for (var i = tweens.length - 1; i >= 0; --i) {
		var tween = tweens[i];
		tween.elapsed = Math.min(tween.elapsed + dt, tween.duration);
		var normal = tween.elapsed / tween.duration;
		for (var key in tween.to) {
			tween.target[key] = easing.linear(tween.from[key], tween.to[key], normal);
		}
		if (tween.elapsed >= tween.duration) {
			tweens.splice(i, 1);
		}
	}
};
