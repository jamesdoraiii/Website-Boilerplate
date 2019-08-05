require('dotenv').config();

const express = require('express');
const Next = require('next');
const routes = require('./routes');
const Filters = require('postgraphile-plugin-connection-filter');
const { postgraphile } = require('postgraphile');

const port = process.env.PORT || 3000;
const next = Next({ dev: process.env.NODE_ENV !== 'production' });

(async () => {
	await next.prepare();

	const app = express();

	app.use(
		'/apis',
		postgraphile(
			{ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === 'true' },
			{
				graphiql: process.env.NODE_ENV !== 'production',
				enhanceGraphiql: true,
				appendPlugins: [Filters],
				graphileBuildOptions: {
					connectionFilterRelations: true
				}
			}
		)
	);

	app.use(routes.getRequestHandler(next));

	app.listen(port, () => {
		const { name, version } = require('./package.json');

		console.log(`${name} v${version} listening on port ${port}`);
	});
})();

const errorWare = (error, req, res, done) => {
	console.log('ROUTE ERR', error);

	return res.sendStatus(500);
};
