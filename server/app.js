'use strict';
import { app, teardown } from './setup/express.js';
import routes from './routes.js';
import { knex } from './setup/db.js';
export default (async() => {
	try {
		process.on('SIGINT', () => {
			console.log(`Exiting application at ${new Date()}`);
			try {
				teardown();
			} catch (e) { console.error(e); }
			process.exit(0);
		});
		knex.migrate.latest();
		app.use('/', routes);
	} catch (e) {
		console.error(e);
	}
})();
