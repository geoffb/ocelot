var renderers = {
	rect: function (ctx, shape) {
		var x = -Math.round(shape.width / 2);
		var y = -Math.round(shape.height / 2);
		ctx.fillRect(x, y, shape.width, shape.height);
		ctx.strokeRect(x, y, shape.width, shape.height);
	},
	arc: function (ctx, shape) {
		ctx.beginPath();
		ctx.arc(0, 0, shape.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
	}
};

exports.render = function (ctx) {
	var shape = this.shape;
	ctx.fillStyle = shape.fill;
	ctx.strokeStyle = shape.stroke;
	ctx.lineWidth = shape.lineWidth || 1;
	renderers[shape.type](ctx, shape);
};
