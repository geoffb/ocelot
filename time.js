var last = 0;
var onUpdate;

var update = function (time) {
	delta = time - last;
	last = time;
	if (onUpdate) {
		onUpdate(delta);
	}
	requestAnimationFrame(update);
};

exports.start = function (callback) {
	onUpdate = callback;
	update(0);
};
