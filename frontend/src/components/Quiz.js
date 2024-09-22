import React, { useState } from 'react';
import './Quiz.css';

function Quiz({ questions, onSubmit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerClick = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const previousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = () => {
    onSubmit(userAnswers);
  };

  const { question, options, answer } = questions[currentQuestionIndex] || {};

  return (
    <div className="quiz">
      {questions.length > 0 ? (
        <>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{question}</p>
          <div className="options">
            {options.map((option, index) => (
              <button 
                key={index} 
                className={`option ${userAnswers[currentQuestionIndex] === option ? 'selected' : ''}`} 
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation">
            <button onClick={previousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button onClick={nextQuestion}>Next</button>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default Quiz;
