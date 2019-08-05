const _ = require('lodash');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const fileName = process.argv[2] ? _.kebabCase(process.argv[2]) : undefined;
const functionName = process.argv[2] ? _.snakeCase(process.argv[2]) : undefined;
const functionsPath = path.join(__dirname, '..', 'database', 'functions');

if (!fileName) {
	throw new Error('No function name was provided');
}

const contents = `begin;\n\ncreate or replace function ${functionName}() returns integer as $$\n\tbegin\n\t\t\n\tend;\n$$ language plpgsql;\n\ncommit;`;

mkdirp(functionsPath, err => {
	if (err) {
		throw err;
	}

	fs.writeFile(path.join(functionsPath, `${fileName}.sql`), contents, err => {
		if (err) {
			throw err;
		}
	});
});
