const express = require("express");
const Vehicle = require("../models/Vehicle");
const VehicalFitness = require("../models/VehicalFitness");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Register a vehicle
router.post("/registerVehicle", async (req, res) => {
  try {
    //console.log("Received Data:", req.body); // Debugging
    const newVehicle = new Vehicle(req.body);
    await newVehicle.save(); // Save new vehicle to database

    res.status(201).json({ message: "Vehicle registered successfully!", newVehicle });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message }); // Handle validation errors
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all registered vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
}); 

// Get all vehicles fitness certificate
router.get("/getVehicalFitnessCertificate", async (req, res) => {
  try {
    const certificates = await VehicalFitness.find().populate('user');
    res.json({
      certificates,
      message: "fetched all the vehical certificate"
    });
  } catch (error) {
    console.log("Error in getVehicalFitnessCertificate:", error)
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});


// store vehicles fitness certificate details
router.post("/vehicalFitnessCertificate", authMiddleware, async (req, res) => {
  try {
    const { registrationNo, ownerName, chassisNumber, engineNumber, model, vehicalType, fuelType, emiissionLeval, insuranceExpiryDate } = req.body;

    const newCertificates = new VehicalFitness({
      registrationNo,
      ownerName,
      chassisNumber,
      engineNumber,
      model,
      vehicalType,
      fuelType,
      emiissionLeval,
      insuranceExpiryDate,
      user: req.user.id
    });

    await newCertificates.save();

    return res.json({
      newCertificates,
      message: "vehical fitness certificate stored successfully"
    });
  } catch (error) {
    console.log("Error --->", error)
    res.status(500).json({ error: "Failed to store vehicles" });
  }
});

module.exports = router;
