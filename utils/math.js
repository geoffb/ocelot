exports.tau = Math.PI * 2;

exports.lerp = function (a, b, t) {
	return a + ((b - a) * t);
};
