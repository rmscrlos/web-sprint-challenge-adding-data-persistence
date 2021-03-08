// build your `Task` model here
const db = require('../../data/dbConfig');

// add task
const addTask = async task => {
	const [task_id] = await db('tasks').insert(task);
	const addedTask = await db('tasks').where({ task_id }).first();

	return addedTask;
};

// get all tasks
const findTasks = () => {
	return db('tasks as t')
		.leftJoin('projects as p', 'p.project_id', 't.project_id')
		.select('t.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description');
};

module.exports = {
	addTask,
	findTasks
};
