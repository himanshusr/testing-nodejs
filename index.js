import dotenv from 'dotenv';
import app from './server/app.js';
dotenv.config();

process.on('uncaughtException', (err) => {
	console.error('There was an uncaught error', err);
	process.exit(1);
});

export default app;
