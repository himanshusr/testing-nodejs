import { Model } from '../setup/db.js';

export default class Restaurants extends Model {
	static get tableName() {
		return 'restaurants';
	}
}
