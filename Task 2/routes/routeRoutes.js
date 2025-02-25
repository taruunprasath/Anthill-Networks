const express = require('express');
const { addRoute, updateRoute } = require('../controllers/routeController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.route('/').post(protect, admin, addRoute);
router.route('/:id').put(protect, admin, updateRoute);

module.exports = router;