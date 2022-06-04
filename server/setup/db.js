'use strict';
import _knex from 'knex';
import { Model } from 'objection';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
	client: process.env.DATABASE_CLIENT || 'pg',
	debug: true,

	connection: {
		host: process.env.DATABASE_HOST || '127.0.0.1',
		port: process.env.DATABASE_PORT || '5432',
		user: process.env.DATABASE_USER || 'postgres',
		password: process.env.DATABASE_PASSWORD || '123456',
		database: process.env.DATABASE_NAME || 'postgres'
	},
	pool: {
		min: process.env.DATABASE_MIN_POOL_SIZE || 2,
		max: process.env.DATABASE_MAX_POOL_SIZE || 4
	}
};
if (process.env.DATABASE_DEBUG_MODE) {
	dbConfig.debug = true;
}

// console.log(dbConfig);
const knex = _knex(dbConfig);

Model.knex(knex);

export { knex, Model };
