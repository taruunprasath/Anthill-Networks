const mongoose = require('mongoose');

const routeSchema = mongoose.Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true },
        distance: { type: Number, required: true },
        duration: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Route', routeSchema);