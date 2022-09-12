import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// loading-bar in top
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress:5
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#dc3545'
            progress={this.state.progress}
            height={3}
            
          />
          <Navbar heading={"NEWS"} />
          <div className='container'>

            <Routes>
              <Route exact path="/" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key={'general'} heading={"Top-News"} pageSize={9} country={'in'} category={'general'} />} />
              <Route exact path="/buisness" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key='buisness' heading={"Top-News"} pageSize={9} country={'in'} category={'buisness'} />} />
              <Route exact path="/science" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key={'science'} heading={"Top-News"} pageSize={9} country={'in'} category={'science'} />} />
              <Route exact path="/sports" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key={'sports'} heading={"Top-News"} pageSize={9} country={'in'} category={'sports'} />} />
              <Route exact path="/entertainment" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key={'entertainment'} heading={"Top-News"} pageSize={9} country={'in'} category={'entertainment'} />} />
              <Route exact path="/health" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key={'health'} heading={"Top-News"} pageSize={9} country={'in'} category={'health'} />} />
              <Route exact path="/technology" element={<News setProgress={ this.setProgress} apiKey={this.apiKey}  key={'technology'} heading={"Top-News"} pageSize={9} country={'in'} category={'technology'} />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}
