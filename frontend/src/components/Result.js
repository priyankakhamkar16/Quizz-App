import React from 'react';

function Result({ score, total, setUserName, onSubmit }) {
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="result">
      <h2>Your Score: {score} / {total}</h2>
      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={handleUserNameChange} 
      />
      <button onClick={onSubmit}>Submit Score</button>
    </div>
  );
}

export default Result;
