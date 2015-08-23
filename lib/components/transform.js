var entities = require("../entities");

// exports.add = function () {
// 	var transform = this.transform;
// 	var children = transform.children;
// 	if (children && children.length) {
// 		for (var i = 0; i < children.length; ++i) {
// 			var child = children[i];
// 			child.transform.parent = this;
// 			entities.add(child);
// 		}
// 	}
// };

exports.render = function (ctx, camera) {
	var transform = this.transform;
	var cameraSpace = transform.space === "camera";
	var offsetX = cameraSpace ? 0 : -camera.x;
	var offsetY = cameraSpace ? 0 : -camera.y;
	var x = Math.round(transform.x + offsetX);
	var y = Math.round(transform.y + offsetY);
	ctx.translate(x, y);
	ctx.rotate(transform.r);
	ctx.scale(transform.sx, transform.sy);
};
