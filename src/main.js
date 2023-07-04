import * as App from "./ecs/App.js";
import Boot from "./systems/Boot.js";
import Render from "./systems/Render.js";

const app = App.create();

App.addBootSystems(app, Boot);

App.addSystems(app, Render);

App.boot(app);

function frame(time) {
	App.update(app, time);
	requestAnimationFrame(frame);
}

frame(performance.now());
