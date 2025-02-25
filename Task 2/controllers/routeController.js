const asyncHandler = require('express-async-handler');
const Route = require('../models/Route');

const addRoute = asyncHandler(async (req, res) => {
    const { from, to, distance, duration } = req.body;

    const route = await Route.create({
        from,
        to,
        distance,
        duration,
    });

    res.status(201).json(route);
});


const updateRoute = asyncHandler(async (req, res) => {
    const route = await Route.findById(req.params.id);

    if (route) {
        route.from = req.body.from || route.from;
        route.to = req.body.to || route.to;
        route.distance = req.body.distance || route.distance;
        route.duration = req.body.duration || route.duration;

        const updatedRoute = await route.save();
        res.json(updatedRoute);
    } else {
        res.status(404);
        throw new Error('Route not found');
    }
});

module.exports = { addRoute, updateRoute };