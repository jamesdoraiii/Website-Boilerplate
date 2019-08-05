const _ = require('lodash');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const fileName = process.argv[2] ? _.kebabCase(process.argv[2]) : undefined;
const viewName = process.argv[2] ? _.snakeCase(process.argv[2]) : undefined;
const viewsPath = path.join(__dirname, '..', 'database', 'views');

if (!fileName) {
	throw new Error('No view name was provided');
}

const contents = `begin;\n\ncreate or replace view ${viewName} as (\n\t\n);\n\ncommit;`;

mkdirp(viewsPath, err => {
	if (err) {
		throw err;
	}

	fs.writeFile(path.join(viewsPath, `${fileName}.sql`), contents, err => {
		if (err) {
			throw err;
		}
	});
});
