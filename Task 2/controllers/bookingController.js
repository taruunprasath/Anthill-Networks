const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');
const Bus = require('../models/Bus');

const bookBus = asyncHandler(async (req, res) => {
    const { busId, seats } = req.body;

    const bus = await Bus.findById(busId);

    if (bus) {
        if (bus.capacity < seats) {
            res.status(400);
            throw new Error('Not enough seats available');
        }

        const totalPrice = seats * 100; 

        const booking = await Booking.create({
            user: req.user._id,
            bus: busId,
            seats,
            totalPrice,
        });

        bus.capacity -= seats;
        await bus.save();

        res.status(201).json(booking);
    } else {
        res.status(404);
        throw new Error('Bus not found');
    }
});

const cancelBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        if (booking.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to cancel this booking');
        }

        const bus = await Bus.findById(booking.bus);

        if (bus) {
            bus.capacity += booking.seats;
            await bus.save();
        }

        booking.status = 'cancelled';
        await booking.save();

        res.json({ message: 'Booking cancelled' });
    } else {
        res.status(404);
        throw new Error('Booking not found');
    }
});

module.exports = { bookBus, cancelBooking };