import * as Vec2 from "../math/Vec2.js";

export const ID = "transform";

export function create() {
	return {
		position: Vec2.create(),
		scale: Vec2.create(1, 1),
		rotation: 0,
	};
}
