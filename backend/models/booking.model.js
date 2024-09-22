import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  rentalDates: {
    from: { type: Date, required: true },
    to: { type: Date, required: true }
  }
});

const BookingModel = mongoose.model('Booking', bookingSchema);
export default BookingModel
