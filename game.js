var engine = require("./engine");
var entities = require("./entities");
var assets = require("./assets");

engine.init(800, 600);

assets.load([
	"hero.png"
]);

entities.definePrefab("thing1", {
	transform: {
		x: 100,
		y: 100,
		sx: 1,
		sy: 1,
		r: 0
	},
	body: {
		vx: 0,
		vy: 0,
		g: 1
	},
	// sprite: {
	// 	alpha: 1,
	// 	path: "hero.png"
	// },
	shape: {
		type: "rect",
		fill: "red",
		stroke: "darkred",
		lineWidth: 4,
		width: 40,
		height: 80
	},
	// text: {
	// 	text: "Hello World",
	// 	fill: "black",
	// 	font: "Arial",
	// 	size: 12
	// }
});

entities.spawn("thing1");

engine.start();
