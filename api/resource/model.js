// build your `Project` model here
const db = require('../../data/dbConfig');

const addResource = async resource => {
	const [resource_id] = await db('resources').insert(resource);
	const addedResource = await db('resources').where({ resource_id }).first();

	return addedResource;
};

const findResources = () => {
	return db('resources');
};

module.exports = {
	addResource,
	findResources
};
