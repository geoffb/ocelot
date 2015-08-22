var easing = require("./utils/easing");
var math = require("./utils/math");

var tweens = [];

exports.create = function (target, to, duration, delay, ease) {
	var from = {};
	for (var key in to) {
		from[key] = target[key];
	}
	tweens.push({
		target: target,
		from: from,
		to: to,
		duration: duration,
		delay: delay || 0,
		ease: ease || "linear",
		elapsed: 0
	});
};

exports.update = function (dt) {
	for (var i = tweens.length - 1; i >= 0; --i) {
		var tween = tweens[i];
		if (tween.delay > 0) {
			tween.delay -= dt;
		} else {
			tween.elapsed = Math.min(tween.elapsed + dt, tween.duration);
			var normal = tween.elapsed / tween.duration;
			for (var key in tween.to) {
				tween.target[key] = math.lerp(
					tween.from[key],
					tween.to[key],
					easing[tween.ease](normal)
				);
			}
			if (tween.elapsed >= tween.duration) {
				tweens.splice(i, 1);
			}
		}
	}
};
