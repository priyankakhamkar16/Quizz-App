import React from 'react';
import About from './About';
import './Home.css';

function Home({ startQuiz }) {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Quiz Game!</h1>
        <p>Test your knowledge with our fun and interactive quiz game. Click the button below to get started!</p>
        <button onClick={startQuiz} className="start-quiz-button">Start Quiz</button>
      </header>
      <About />
    </div>
  );
}

export default Home;
