import * as ComponentGroup from "./ComponentGroup.js";

const GlobalEntityID = 0;

export function create() {
	return {
		lastUpdate: 0,
		deltaTime: 0,
		nextEntityID: 1,
		components: {},
		bootSystems: [],
		systems: [],
		resources: {},
	};
}

export function getComponents(app, componentID) {
	return app.components[componentID].list;
}

export function addResource(app, key, data) {
	app.resources[key] = data;
}

export function getResource(app, key) {
	return app.resources[key];
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
	let group = app.components[componentID];
	if (group === undefined) {
		throw new Error(`Invalid component: id=${id}, component=${componentID}`);
	}
	return ComponentGroup.get(group, id);
}

export function addGlobalComponent(app, componentID, data) {
	return addEntityComponent(app, GlobalEntityID, componentID, data);
}

export function getGlobalComponent(app, componentID) {
	return getEntityComponent(app, GlobalEntityID, componentID);
}

export function addPlugins(app, ...plugins) {
	for (const plugin of plugins) {
		addBootSystems(app, ...plugin.boot);
		addSystems(app, ...plugin.update);
	}
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

export function run(app) {
	// Execute boot systems
	boot(app);

	// Create frame update handler
	const frame = function (time) {
		update(app, time);
		requestAnimationFrame(frame);
	};

	// Kick off main loop
	frame(performance.now());
}
