const express = require('express');
const { addBus, updateBus } = require('../controllers/busController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.route('/').post(protect, admin, addBus);
router.route('/:id').put(protect, admin, updateBus);

module.exports = router;