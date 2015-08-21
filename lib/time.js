var threshold = 100;
var last = 0;
var onUpdate;

var update = function (time) {
	delta = time - last;
	last = time;
	if (delta <= threshold && onUpdate) {
		onUpdate(delta);
	}
	requestAnimationFrame(update);
};

exports.start = function (callback) {
	onUpdate = callback;
	update(0);
};
