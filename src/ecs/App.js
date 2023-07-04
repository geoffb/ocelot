import * as ComponentGroup from "./ComponentGroup.js";

const GlobalEntityID = 0;

export function create() {
	const app = {
		lastUpdate: 0,
		deltaTime: 0,
		nextEntityID: 1,
		components: {},
		bootSystems: [],
		systems: [],
	};
}

export function addBootSystems(app, ...systems) {
	app.bootSystems.push(...systems);
}

export function addSystems(app, ...systems) {
	app.systems.push(...systems);
}

export function addEntity(app) {
	return app.nextEntityID++;
}

export function addEntityComponent(app, id, componentID, data) {
	let group = app.components[componentID];
	if (group === undefined) {
		group = ComponentGroup.create();
		app.components[componentID] = group;
	}
	ComponentGroup.add(group, id, data);
	return data;
}

export function getEntityComponent(app, id, componentID) {
	// TODO: Get entity component
}

export function addGlobalComponent(app, componentID, data) {
	return addEntityComponent(app, GlobalEntityID, componentID, data);
}

export function getGlobalComponent(app, componentID) {
	return getEntityComponent(app, GlobalEntityID, componentID);
}

export function boot(app) {
	for (const system of app.bootSystems) {
		system(app);
	}
}

export function update(app, time) {
	app.deltaTime = time - app.lastUpdate;
	app.lastUpdate = time;
	for (const system of app.systems) {
		system(app);
	}
}

export function start(app) {
	App.boot(app);

	const frame = function (time) {
		App.update(app, time);
		requestAnimationFrame(frame);
	};

	frame(performance.now());
}
