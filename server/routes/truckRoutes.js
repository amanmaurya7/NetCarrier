// routes/truckRoutes.js

const express = require('express');
const router = express.Router();
const Truck = require('../models/Truck');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add a new truck
router.post('/add', authMiddleware, async (req, res) => {
  try {
    // Extract truck data from the request body
    const { capacity, driverLicense } = req.body;

    // Create a new truck document
    const truck = new Truck({
      capacity,
      driverLicense,
      // Add more fields as needed
    });

    // Save the new truck to the database
    await truck.save();

    // Send a success response
    res.status(201).json({ message: 'Truck added successfully', truck });
  } catch (error) {
    console.error('Error adding truck:', error);
    // Send an error response
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
