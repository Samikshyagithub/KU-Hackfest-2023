
import './App.css';
import React, { Component } from 'react'

// import Video from './components/Video';

import Home from './components/Home';
import Main from './components/Main';
import {BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom'   
import Result from './components/Result';
import Video from './components/Video';
import GltfModel from './components/blender_test';
import ModelViewer from './components/test';

export default class App extends Component {

  render() {
    return (
      
      <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/select" element={<Home/>}/>
        <Route exact path="/results" element={<Result/>}/> 
        <Route exact path="/video" element={<Video/>}/> 
        <Route exact path="/test" element={<ModelViewer modelPath={"/untitled.glb"}/>}/> 
      </Routes>
      </Router>
    )
  }
}


