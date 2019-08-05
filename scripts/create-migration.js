const _ = require('lodash');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const name = process.argv[2] ? `.${_.kebabCase(process.argv[2])}` : '';
const now = new Date();
const timestamp = now.getTime();
const contents = `begin;\n\n\n\ncommit;`;

['do', 'undo'].forEach(which => {
	const migrationsPath = path.join(__dirname, '..', 'database', 'migrations');
	const fileName = `${timestamp}.${which}${name}`;

	mkdirp(migrationsPath, err => {
		if (err) {
			throw err;
		}

		fs.writeFile(path.join(migrationsPath, `${fileName}.sql`), contents, err => {
			if (err) {
				throw err;
			}
		});
	});
});
