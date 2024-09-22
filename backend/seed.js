const mongoose = require('mongoose');
const Question = require('./models/Question');
require('dotenv').config(); // Load environment variables

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const questions = [
      {
        question: "Who is known as the 'Father of the Nation' in India?",
        options: ["Jawaharlal Nehru", "Bhagat Singh", "Mahatma Gandhi", "Subhas Chandra Bose"],
        answer: "Mahatma Gandhi"
      },
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        answer: "New Delhi"
      },
      {
        question: "Which is the national animal of India?",
        options: ["Lion", "Tiger", "Elephant", "Peacock"],
        answer: "Tiger"
      },
      {
        question: "Who was the first Prime Minister of India?",
        options: ["Indira Gandhi", "Sardar Vallabhbhai Patel", "Rajendra Prasad", "Jawaharlal Nehru"],
        answer: "Jawaharlal Nehru"
      },
      {
        question: "Which river is considered the holiest in India?",
        options: ["Yamuna", "Ganga (Ganges)", "Narmada", "Godavari"],
        answer: "Ganga (Ganges)"
      },
      {
        question: "Which state in India is the largest by area?",
        options: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        answer: "Rajasthan"
      },
      {
        question: "Which festival is known as the 'Festival of Lights' in India?",
        options: ["Holi", "Diwali", "Eid", "Christmas"],
        answer: "Diwali"
      },
      {
        question: "Which Indian city is known as the 'Silicon Valley of India'?",
        options: ["Mumbai", "Hyderabad", "Bengaluru", "Pune"],
        answer: "Bengaluru"
      },
      {
        question: "In which year did India gain independence?",
        options: ["1945", "1947", "1950", "1952"],
        answer: "1947"
      },
      {
        question: "Which monument is known as the symbol of love in India?",
        options: ["Qutub Minar", "Red Fort", "Taj Mahal", "India Gate"],
        answer: "Taj Mahal"
      },
    
      // Add more questions as needed
    ];

    await Question.insertMany(questions);
    console.log("Questions seeded!");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
