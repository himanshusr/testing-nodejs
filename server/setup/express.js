'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 5000;

export const _server = app.listen(port);
console.log('Express Server started and listening on port ', port);

export function teardown() {
	_server.close();
}
