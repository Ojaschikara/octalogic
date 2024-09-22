import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    
  type: {
    type: String,
    enum: ['hatchback', 'suv', 'sedan', 'cruiser', 'sports'],
    required: true
  },
  model: { type: String, required: true },
  available: { type: Boolean, default: true }
});

const VehicleModel = mongoose.model('Vehicle', vehicleSchema);
 
export default VehicleModel;
