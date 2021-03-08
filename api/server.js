// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use(projectRouter);
server.use(resourceRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong. Please, try again later.'
	});
});

module.exports = server;
