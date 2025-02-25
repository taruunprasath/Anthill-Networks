const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
        seats: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);