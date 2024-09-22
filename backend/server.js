const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const questionRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for Socket.IO
    methods: ['GET', 'POST'],
  }
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/quizzApp';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for quiz answers and calculate the score
  socket.on('submit-answers', ({ userAnswers, score }) => {
    console.log('User answers received:', userAnswers);
    console.log('Score:', score);

    // You can save the answers or score in the database here if needed
    // For now, broadcast the score to all connected clients
    io.emit('score-update', score);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});
