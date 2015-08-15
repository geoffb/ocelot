var math = require("./math");

exports.linear = function (a, b, t) {
	return math.lerp(a, b, t);
};
