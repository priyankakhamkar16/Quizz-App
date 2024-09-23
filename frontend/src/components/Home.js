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

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Play Our Quiz Game?</h2>
        <div className="features-container">
          <div className="feature">
            <img src={require('../images/feature1.jpg')} alt="Feature 1" />
            <h3>Fun & Engaging</h3>
            <p>Experience an exciting quiz game designed to entertain and challenge you.</p>
          </div>
          <div className="feature">
            <img src={require('../images/feature2.jpg')} alt="Feature 2" />
            <h3>Variety of Topics</h3>
            <p>Test your knowledge across multiple categories including science, sports, and more!</p>
          </div>
          <div className="feature">
            <img src={require('../images/feature4.avif')} alt="Feature 3" />
            <h3>Compete with Friends</h3>
            <p>Share your score and compete with friends to see who knows the most!</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <span>1</span>
            <h3>Start the Quiz</h3>
            <p>Click the start button to begin the quiz and choose your category.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Answer Questions</h3>
            <p>Answer multiple-choice questions and track your score.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>See Your Results</h3>
            <p>Finish the quiz and review your results to see how well you did.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Players Are Saying</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"This quiz game is super fun! I learned so much while playing."</p>
            <span>– John Doe</span>
          </div>
          <div className="testimonial">
            <p>"A great way to pass time and test my general knowledge!"</p>
            <span>– Jane Smith</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Test Your Knowledge?</h2>
        <button onClick={startQuiz} className="cta-button">Start the Quiz Now</button>
      </section>

      <About />
    </div>
  );
}

export default Home;
