// build your `/api/resources` router here
const express = require('express');
const resourceModel = require('./model');

const router = express.Router();

// add resource
router.post('/api/resources', async (req, res, next) => {
	try {
		const resource = resourceModel.addResource(req.body);
		res.status(201).json(resource);
	} catch (err) {
		next(err);
	}
});

// get all resources
router.get('/api/resources', async (req, res, next) => {
	try {
		const resources = await resourceModel.findResources();
		res.json(resources);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
