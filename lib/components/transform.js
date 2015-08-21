exports.render = function (ctx) {
	var transform = this.transform;
	var x = Math.round(transform.x);
	var y = Math.round(transform.y);
	ctx.translate(x, y);
	ctx.rotate(transform.r);
	ctx.scale(transform.sx, transform.sy);
};
