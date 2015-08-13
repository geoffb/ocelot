exports.update = function (dt) {
	var body = this.body;
	var transform = this.transform;

	body.vy += 0.001 * body.g * dt;

	transform.x += body.vx * dt;
	transform.y += body.vy * dt;



};
