import express from "express"
import VehicleModel from "../models/vehicle.model";
const router = express.Router();


router.get('/vehicles', async (req, res) => {
  try {
     const vehicles = await VehicleModel.find({ available: true });
     res.json(vehicles);
  }   catch (err) {
      res.status(500).json({ error: err.message });
  }
});

export default router;