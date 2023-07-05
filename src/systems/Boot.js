import * as Viewport from "../components/Viewport.js";
import * as App from "../ecs/App.js";

export default function (app) {
	// Initialize viewport
	// TODO: Source width/height from config
	const viewport = App.addGlobalComponent(
		app,
		Viewport.ID,
		Viewport.create(512, 256)
	);

	document.body.appendChild(viewport.canvas);

	Viewport.autoSize(viewport);

	window.addEventListener("resize", () => Viewport.autoSize(viewport));
}
