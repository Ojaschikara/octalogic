import express from "express"
import VehicleModel from "../models/vehicle.model";
import BookingModel from "../models/booking.model";
const router = express.Router();

router.post('/book', async (req, res) => {
  const { user, vehicleId, rentalDates } = req.body;

  try {
    const existingBooking = await BookingModel.findOne({
      vehicle: vehicleId,
      $or: [
        { 'rentalDates.from': { $lt: rentalDates.to }, 'rentalDates.to': { $gt: rentalDates.from } }
      ]
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'VehicleModel already booked for the given dates' });
    }

    const newBooking = new BookingModel({
      user,
      vehicle: vehicleId,
      rentalDates
    });

    await newBooking.save();

    await VehicleModel.findByIdAndUpdate(vehicleId, { available: false });

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
