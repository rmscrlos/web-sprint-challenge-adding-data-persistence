// build your `Project` model here
const db = require('../../data/dbConfig');

const addProject = async project => {
	const [project_id] = await db('projects').insert(project);
	const addedProject = await db('projects').where({ project_id }).first();

	return addedProject;
};

const findProjects = () => {
	return db('projects');
};

module.exports = {
	addProject,
	findProjects
};
