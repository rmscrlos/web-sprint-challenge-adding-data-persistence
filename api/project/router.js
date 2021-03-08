// build your `/api/projects` router here
const express = require('express');
const projectModel = require('../project/model');

const router = express.Router();

// create project
router.post('/api/projects', async (req, res, next) => {
	try {
		const newProject = await projectModel.addProject(req.body);
		res.status(201).json(newProject);
	} catch (err) {
		next(err);
	}
});

// get all projects
router.get('/api/projects', async (req, res, next) => {
	try {
		const projects = await projectModel.findProjects();
		res.json(projects);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
