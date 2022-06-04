import { getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant } from '../../services/restaurants/index.js';
import { generateApiSuccessResponse } from '../../utils/response_helper.js';
import { restaurantValidation } from '../../utils/restaurantValidation.js';

export async function getRestaurantInfo(params) {
	try {
		const result = await getRestaurants(params);
		return Promise.resolve(generateApiSuccessResponse(result));
	} catch (error) {
		return Promise.reject({
			status: 'error',
			data: error
		});
	}
}

export async function createRestaurantInfo(restaurantInfo) {
	try {
		// Validation for creating a restaurant
		const { error, value } = await restaurantValidation.validate(restaurantInfo);
		if (error) {
			throw error;
		}
		const result = await createRestaurant(value);
		return Promise.resolve(generateApiSuccessResponse(result));
	} catch (error) {
		return Promise.reject({
			status: 'error',
			data: error
		});
	}
}

export async function updateRestaurantInfo(restaurantId, restaurantInfo) {
	try {
		const result = await updateRestaurant(restaurantId, restaurantInfo);
		return Promise.resolve(generateApiSuccessResponse(result));
	} catch (error) {
		return Promise.reject({
			status: 'error',
			data: error
		});
	}
}

export async function deleteRestaurantInfo(restaurantId) {
	try {
		const result = await deleteRestaurant(restaurantId);
		return Promise.resolve(generateApiSuccessResponse(result));
	} catch (error) {
		return Promise.reject({
			status: 'error',
			data: error
		});
	}
}
