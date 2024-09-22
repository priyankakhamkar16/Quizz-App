const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

router.post('/', async (req, res) => {
  const question = new Question({
    question: req.body.question,
    options: req.body.options,
    answer: req.body.answer,
  });

  try {
    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
