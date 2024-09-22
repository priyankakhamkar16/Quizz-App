import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

// Create a Socket.IO connection
const socket = io('http://localhost:5000');

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [result, setResult] = useState(null);
  const [userName, setUserName] = useState('');
  const [liveScore, setLiveScore] = useState(null);

  useEffect(() => {
    // Fetch quiz questions from the backend
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/questions');
        console.log("Fetched questions:", data);
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();

    // Listen for real-time score updates from the server
    socket.on('score-update', (updatedScore) => {
      console.log("Live score update received:", updatedScore);
      setLiveScore(updatedScore);
    });

    return () => {
      socket.off('score-update');
    };
  }, []);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizSubmit = (userAnswers) => {
    const score = userAnswers.reduce((total, answer, index) => {
      return total + (answer === questions[index].answer ? 1 : 0);
    }, 0);

    setResult({ score, total: questions.length, userAnswers });

    // Emit answers and score to the server via Socket.IO
    socket.emit('submit-answers', { userAnswers, score });
  };

  const handleSubmit = async () => {
    if (!userName) {
      console.error("User name is required");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/users/submit', { name: userName, score: result.score });
      console.log("Score submitted successfully");
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      {liveScore && <p>Live Score: {liveScore}</p>}
      {!quizStarted ? (
        <Home startQuiz={startQuiz} />
      ) : result ? (
        <Result 
          score={result.score} 
          total={result.total} 
          setUserName={setUserName} 
          onSubmit={handleSubmit} // Only submit the score when the user provides a name
        />
      ) : (
        <Quiz questions={questions} onSubmit={handleQuizSubmit} />
      )}
      <Footer />
    </div>
  );
}

export default App;
