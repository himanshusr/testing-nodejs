import Joi from '@hapi/joi';

export const restaurantValidation = Joi.object({
	restaurant_name: Joi.string().required(),
	address: Joi.string().required(),
	veg_only: Joi.bool(),
	cost: Joi.string().valid('low', 'medium', 'high'),
	cuisine_types: Joi.array(),
	is_open: Joi.bool()
});
