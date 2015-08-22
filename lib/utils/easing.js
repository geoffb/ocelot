exports.linear = function (k) {
	return k;
};

exports.quadIn = function (k) {
	return k * k;
};

exports.quadOut = function (k) {
	return k * (2 - k);
};

exports.quadInOut = function (k) {
	return k < 0.5 ? exports.quadIn(k) : exports.quadOut(k);
};

exports.sineIn = function (k) {
	if (k === 1) { return 1; }
	return 1 - Math.cos(k * Math.PI / 2);
};

exports.sineOut = function (k) {
	return Math.sin(k * Math.PI / 2);
};

exports.sineInOut = function (k) {
	return 0.5 * (1 - Math.cos(Math.PI * k));
};
