import * as Sprite from "../components/Sprite.js";
import * as Transform from "../components/Transform.js";
import * as Viewport from "../components/Viewport.js";
import * as App from "../ecs/App.js";

const RotateSpeed = Math.PI / 1000;
const MoveSpeed = 10 / 1000;
// const ScaleSpeed = 1 / 1000;

export default function (app) {
	const viewport = App.getGlobalComponent(app, Viewport.ID);
	const ctx = viewport.context;

	// DEBUG: Fill canvas with solid color
	ctx.resetTransform();
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, viewport.canvas.width, viewport.canvas.height);

	const sprites = App.getComponents(app, Sprite.ID);
	for (const sprite of sprites) {
		const transform = App.getEntityComponent(app, sprite.id, Transform.ID);
		const image = App.getResource(app, sprite.data.resource);

		ctx.resetTransform();
		ctx.translate(transform.position.x, transform.position.y);
		ctx.scale(transform.scale.x, transform.scale.y);
		ctx.rotate(transform.rotation);
		// TODO: Source sprite dimensions
		ctx.drawImage(image, 0, 0, 16, 16, -8, -8, 16, 16);
	}
}
