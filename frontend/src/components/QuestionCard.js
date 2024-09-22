import React from 'react';

function QuestionCard({ question, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option === question.correctAnswer)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;
