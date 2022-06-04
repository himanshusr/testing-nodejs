
exports.up = function(knex, Promise) {
	return knex.schema.createTable('restaurants', function(table) {
		table.uuid('id').primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
		table.string('restaurant_name').notNull();
		table.string('address').notNull();
		table.boolean('veg_only').defaultTo(true);
		table.enu('cost', ['low', 'medium', 'high'], { useNative: true, enumName: 'cost_type' }).defaultTo('low');
		table.specificType('cuisine_types', 'text[]');
		table.boolean('is_open').defaultTo(false);
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('restaurants');
};
