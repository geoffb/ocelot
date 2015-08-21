var assets = {};

exports.load = function (assetPaths, callback) {
	var loaded = 0;
	for (var i = 0; i < assetPaths.length; ++i) {
		var path = assetPaths[i];
		var img = new Image();
		img.src = path;
		img.onload = function () {
			loaded++;
			if (loaded >= assetPaths.length) {
				callback && callback();
			}
		};
		assets[path] = img;
	}
};

exports.get = function (assetPath) {
	return assets[assetPath];
};
