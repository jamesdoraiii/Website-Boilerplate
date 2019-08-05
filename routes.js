const routes = require('next-routes')();

routes
	.add('index', '/', '/modules/home')
	.add('example', '/example', '/modules/example')
	.add('parent-signup', '/parent-signup', '/modules/parent-signup')
	.add('sitter-signup', '/sitter-signup', '/modules/sitter-signup');

module.exports = routes;
