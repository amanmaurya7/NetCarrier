// userController.js (inside controllers folder)

const User = require('../models/User');

// Controller function to handle user creation
exports.createUser = async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send response with the saved user data
    res.status(201).json(savedUser);
  } catch (error) {
    // Handle error
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
