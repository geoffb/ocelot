var colors = {};

exports.define = function (data) {
	colors = data;
};

exports.rgba = function (key, a) {
	var c = colors[key];
	return "rgba(" + c.join(",") + "," + a + ")";
};
