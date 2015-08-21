exports.render = function (ctx) {
	var text = this.text;
	ctx.font = text.size + "px " + text.font;
	ctx.fillStyle = text.fill;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(text.text, 0, 0);
};
