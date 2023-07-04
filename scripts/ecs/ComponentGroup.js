export function create() {
	return {
		list: [],
		lookup: {},
	};
}

export function add(group, id, data) {
	group.list.push({ id, data });
	group.lookup[id] = data;
}

export function get(group, id) {
	const data = group.lookup[id];
	if (data !== undefined) {
		return data;
	} else {
		throw new Error(`No data for entity ${id}`);
	}
}
