const asyncHandler = require('express-async-handler');
const Bus = require('../models/Bus');

// @desc    Add a new bus
// @route   POST /api/buses
// @access  Admin
const addBus = asyncHandler(async (req, res) => {
    const { name, number, capacity, from, to, journeyDate, departure, arrival } = req.body;

    const bus = await Bus.create({
        name,
        number,
        capacity,
        from,
        to,
        journeyDate,
        departure,
        arrival,
    });

    res.status(201).json(bus);
});

// @desc    Update a bus
// @route   PUT /api/buses/:id
// @access  Admin
const updateBus = asyncHandler(async (req, res) => {
    const bus = await Bus.findById(req.params.id);

    if (bus) {
        bus.name = req.body.name || bus.name;
        bus.number = req.body.number || bus.number;
        bus.capacity = req.body.capacity || bus.capacity;
        bus.from = req.body.from || bus.from;
        bus.to = req.body.to || bus.to;
        bus.journeyDate = req.body.journeyDate || bus.journeyDate;
        bus.departure = req.body.departure || bus.departure;
        bus.arrival = req.body.arrival || bus.arrival;

        const updatedBus = await bus.save();
        res.json(updatedBus);
    } else {
        res.status(404);
        throw new Error('Bus not found');
    }
});

module.exports = { addBus, updateBus };