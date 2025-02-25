const express = require('express');
const { bookBus, cancelBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/').post(protect, bookBus);
router.route('/:id/cancel').put(protect, cancelBooking);

module.exports = router;