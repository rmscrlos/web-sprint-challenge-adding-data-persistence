// build your `/api/tasks` router here
const express = require('express');
const tasksModel = require('./model');

const router = express.Router();

// add task router
router.post('/api/tasks', async (req, res, next) => {
	try {
		const task = await tasksModel.addTask(req.body);
		res.status(201).json(task);
	} catch (err) {
		next(err);
	}
});

// get all tasks
router.get('/api/tasks', async (req, res, next) => {
	try {
		const tasks = await tasksModel.findTasks();
		res.json(tasks);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
