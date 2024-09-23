import React, { useState } from 'react';
import './result.css';

function Result({ score, total, setUserName, onSubmit }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(); // Call the onSubmit prop function
    setShowSuccessMessage(true); // Show success message after submission
  };

  return (
    <div className="result">
      <h2>Your Score: {score} / {total}</h2>
      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={handleUserNameChange} 
      />
      <button onClick={handleSubmit}>Submit Score</button>

      {/* Success Pop-up Modal */}
      {showSuccessMessage && (
        <div className="success-modal">
          <div className="success-content">
            <h3>Score Submitted Successfully!</h3>
            <p>Thank you for submitting your score.</p>
            <button onClick={() => setShowSuccessMessage(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
