import React from 'react'
import Navbar from './Navbar'
import './Result.css';

export default function Result() {
  return (
    <div>
      <Navbar/>
      <div className='answer'>
        <h1>Results</h1>
        <div className='answer-box'>
          <h2>Score: </h2>
        </div>    
      </div>
    </div>
  )
}
