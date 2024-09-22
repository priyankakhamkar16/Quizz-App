import React from 'react';
import './About.css';
import aboutImage from '../images/about2.png'; // Adjust the path based on your folder structure

function About() {
  return (
    <section id="about" className="about">
      <h2>About the Quiz Game</h2>
      <p>
        Our quiz game is designed to challenge your knowledge on a wide variety of topics. Whether you’re interested in science, history, or pop culture, you’ll find questions that are both fun and educational.
      </p>
      <img src={aboutImage} alt="About the Quiz Game" className="about-image" />
    </section>
  );
}

export default About;
