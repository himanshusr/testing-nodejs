import Restaurants from '../../models/restaurants.js';

export async function getRestaurants(params) {
	try {
		const restaurants = await Restaurants.query().where(builder => {
			if (params.cost) {
				// split using , for $or condition
				const splitCosts = params.cost.split(',');
				splitCosts.map((cost) => (
					builder.orWhere('cost', cost)
				));
			}
		}).where(builder => {
			if (params.cuisine) {
				if (params.cuisine.includes(';')) {
					// split using ; for $and condition
					const splitCuisine = params.cuisine.split(';');
					splitCuisine.map((cuisine) => (
						builder.where('cuisine_types', '@>', [cuisine])
					));
				} else {
					// split using , for $or condition
					const splitCuisine = params.cuisine.split(',');
					splitCuisine.map((cuisine) => (
						builder.orWhere('cuisine_types', '@>', [cuisine])
					));
				}
			}
		});
		return Promise.resolve(restaurants);
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

export async function createRestaurant(restaurantInfo) {
	try {
		const restaurant = await Restaurants.query().insert({
			...restaurantInfo
		});
		return Promise.resolve(restaurant);
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

export async function updateRestaurant(restaurantId, info) {
	try {
		await Restaurants.query().update(info).where('id', restaurantId);
		return Promise.resolve({});
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

export async function deleteRestaurant(restaurantId) {
	try {
		await Restaurants.query().deleteById(restaurantId);
		return Promise.resolve({});
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}
