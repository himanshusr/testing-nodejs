import healthRouter from './components/health/index.js';
import restaurantRouter from './components/restaurants/index.js';

import express from 'express';
const router = express.Router();

router.use('/health', healthRouter);
router.use('/restaurants', restaurantRouter);

export default router;
