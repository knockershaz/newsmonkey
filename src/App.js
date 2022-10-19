import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API
  apiKey="36e7946b2ec345b2b30c48b2f183616f"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
        <Routes >
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} key="sports" country="in" category="general"/>}/>
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6}key="Business" country="in" category="Business"/>}/>
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6}key="Entertainment" country="in" category="Entertainment"/>}/>
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6}key="Health" country="in" category="Health"/>}/>
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6}key="science" country="in" category="science"/>}/>
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6}key="sports" country="in" category="sports"/>}/>
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6}key="Technology" country="in" category="Technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}


