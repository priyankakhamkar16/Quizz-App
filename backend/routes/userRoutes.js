const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, score } = req.body;

  try {
    const user = new User({ name, score });
    await user.save();
    res.json({ message: 'Score submitted successfully' });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: 'Error saving score' });
  }
});

module.exports = router;
