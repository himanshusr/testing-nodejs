import express from 'express';
import { getRestaurantInfo, createRestaurantInfo, updateRestaurantInfo, deleteRestaurantInfo } from './handler.js';
const router = express.Router();

// @route   GET restaurants/
// @desc    get all restaurants
// @access  Public

router.get('/', async(req, res) => {
	try {
		const result = await getRestaurantInfo(req.query);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}
});

// @route   POST restaurants/
// @desc    create a new restaurant
// @access  Public

router.post('/', async(req, res) => {
	try {
		const result = await createRestaurantInfo(req.body);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}
});

// @route   PUT restaurants/:id
// @desc    update a restaurant with id
// @access  Public

router.put('/:id', async(req, res) => {
	try {
		const result = await updateRestaurantInfo(req.params.id, req.body);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}
});

// @route   DELETE restaurants/:id
// @desc    delete a restaurant with id
// @access  Public

router.delete('/:id', async(req, res) => {
	try {
		const result = await deleteRestaurantInfo(req.params.id, req.body);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}
});

export default router;
