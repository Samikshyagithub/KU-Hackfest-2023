import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Main() {
  return (
    <>
      <Navbar />

      {/* Lower container */}
      <div className="lower-container">
        <div className="image-container">
          {/* Image */}
          <img src="https://th.bing.com/th/id/R.beeb0e23cda27778a370883bcda4ad2c?rik=LlV6URb4dNYwgw&pid=ImgRaw&r=0" alt="Description of the image" />
        </div>

        {/* Right side content */}
        <div className="right-content">
          {/* Description */}
          <div className="description-container">
            <h1>OVERVIEW</h1>
            <div className="describe">
            <p>Dive on a transformative AR journey to refine your soft speaking skills! Our cutting-edge project, "Soft Skills AR Mastery," immerses you in dynamic virtual scenarios where you practice effective communication. Engage in interactive challenges, receive instant feedback, and build confidence in public speaking. Tailored exercises, guided by AR mentors, enhance articulation and tone. Track your progress, boost your confidence, and prepare for real-world conversations. This immersive experience empowers you to master the art of soft speaking, leaving a lasting impression in every interaction. Start your transformative journey today!</p>
          
            </div>
            </div>

          {/* Button */}
          <div className="button-container">
            <Link to="/select" className="btn btn-primary btn-block mb-2">
              Select
            </Link>
            <Link to="/results" className="btn btn-primary btn-block">
              Results
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
