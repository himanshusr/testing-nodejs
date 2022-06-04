
exports.seed = function(knex) {
	// TODO: Reseed
	return Promise.all([
		Promise.resolve()
			// Inserts seed entries
			.then(function() {
				// Inserts seed entries
				return knex('restaurants').insert([
					{
						id: '00000000-0000-0000-0000-000000000001',
						restaurant_name: 'Truffles',
						address: 'Koramangala Bangalore',
						veg_only: false,
						cost: 'low',
						cuisine_types: ['south indian', 'italian', 'french', 'north indian'],
						is_open: true
					},
					{
						id: '00000000-0000-0000-0000-000000000002',
						restaurant_name: 'PannaVilas',
						address: 'Udaipur Rajasthan',
						veg_only: false,
						cost: 'high',
						cuisine_types: [
							'north indian',
							'punjabi',
							'italian'
						],
						is_open: true
					},
					{
						id: '00000000-0000-0000-0000-000000000003',
						restaurant_name: 'Box8',
						address: 'Udaipur Rajasthan',
						veg_only: false,
						cost: 'high',
						cuisine_types: [],
						is_open: true
					},
					{
						id: '00000000-0000-0000-0000-000000000004',
						restaurant_name: 'Zaza',
						address: 'Bangalore Karnataka',
						veg_only: false,
						cost: 'low',
						cuisine_types: [
							'north indian'
						],
						is_open: true
					},
					{
						id: '00000000-0000-0000-0000-000000000005',
						restaurant_name: 'CCD',
						address: 'Bangalore Karnataka',
						veg_only: false,
						cost: 'medium',
						cuisine_types: [
							'north indian'
						],
						is_open: true
					}

				]);
			})
	]);
};
