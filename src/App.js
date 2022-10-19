import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes >
          <Route path="/" element={<News pageSize={6} key="sports" country="in" category="sports"/>}/>
          <Route path="/business" element={<News pageSize={6}key="Business" country="in" category="Business"/>}/>
          <Route path="/entertainment" element={<News pageSize={6}key="Entertainment" country="in" category="Entertainment"/>}/>
          <Route path="/health" element={<News pageSize={6}key="Health" country="in" category="Health"/>}/>
          <Route path="/science" element={<News pageSize={6}key="science" country="in" category="science"/>}/>
          <Route path="/sports" element={<News pageSize={6}key="sports" country="in" category="sports"/>}/>
          <Route path="/technology" element={<News pageSize={6}key="Technology" country="in" category="Technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}


