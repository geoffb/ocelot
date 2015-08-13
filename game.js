var engine = require("./engine");
var entities = require("./entities");

engine.init(800, 600);

entities.definePrefab("thing1", {
	transform: {
		x: 200,
		y: 200,
		sx: 1,
		sy: 1,
		r: 0
	},
	shape: {
		type: "rect",
		fill: "red",
		stroke: "darkred",
		lineWidth: 4,
		radius: 100,
		width: 100,
		height: 100
	},
	text: {
		text: "Hello World",
		fill: "black",
		font: "Arial",
		size: 40
	}
});

entities.spawn("thing1");

engine.start();
