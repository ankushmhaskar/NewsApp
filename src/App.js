import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';



export default class App extends Component {
  render() {
    
    return (
      <>
        <Navbar heading= {"NEWS"}/>
        <div className='container'>
          <News heading= {"Top-News"} pageSize={9}/>
          
        </div>
        
      </>
    )
  }
}
