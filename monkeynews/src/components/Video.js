import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Video() {
  return (
    <>
      <Navbar />
      <div className="video-container-grandfather">
        <div className="video-container">
          <div className="big-box"></div>
          <div className="small-box"></div>
        </div>

        {/* <Link to="/results" className="btn btn-primary btn-block" > <a className="btn btn-primary" >For results</a> </Link> */}
        <a href="http://localhost:5000" className="btn btn-primary">
          For results
        </a>
      </div>
    </>
  );
}
