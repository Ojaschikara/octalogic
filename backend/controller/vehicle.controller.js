import mongoose from 'mongoose';
import dotenv from 'dotenv';
import VehicleModel from '../models/vehicle.model'; 

 dotenv.config();

const vehicleController = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('MongoDB connected');

    const vehicles = [
      { type: 'hatchback', model: 'Santro', available: true },
      { type: 'suv', model: 'Thar', available: true },
      { type: 'sedan', model: 'Verna', available: true },
      { type: 'cruiser', model: 'GT', available: true },
      { type: 'sports', model: 'Hayabusa', available: true }
    ];

    await VehicleModel.deleteMany({});
    console.log('Existing vehicle data cleared');

    await VehicleModel.insertMany(vehicles);
    console.log('Vehicle data updated');

    // mongoose.disconnect();
   
  } catch (error) {
    console.error('Error in controller', error);
    
  }
};

vehicleController();
