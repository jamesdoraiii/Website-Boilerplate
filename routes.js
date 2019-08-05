const routes = require('next-routes')();

routes
	.add('index', '/', '/modules/home')
	.add('example', '/example', '/modules/example');

module.exports = routes;
