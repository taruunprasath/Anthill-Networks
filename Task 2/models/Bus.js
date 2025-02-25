const mongoose = require('mongoose');

const busSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        number: { type: String, required: true, unique: true },
        capacity: { type: Number, required: true },
        from: { type: String, required: true },
        to: { type: String, required: true },
        journeyDate: { type: Date, required: true },
        departure: { type: String, required: true },
        arrival: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Bus', busSchema);