import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Video() {
  const redirectToWebsite = () => {
    window.location.href = "http://localhost:5000";
  };

  return (
    <>
      <Navbar />
      <div className="video-container-grandfather">
        <div className="video-container">
          <div className="big-box">
            <iframe
              height="500px"
              width="1200px"
              className="video1" // Corrected "classname" to "className"
              src="https://momento360.com/e/u/cd7eb139613a40f2bcb78bd5b1fe1dd5?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
              title="Unique"
            ></iframe>
          </div>
        </div>

        {/* Use a button to trigger the redirection */}
      </div>
      <button onClick={redirectToWebsite}>Go to results</button>
    </>
  );
}
