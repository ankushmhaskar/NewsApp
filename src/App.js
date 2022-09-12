import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// loading-bar in top
import LoadingBar from 'react-top-loading-bar'

const App =(props)=> {
  const [progress, setProgress] = useState(5)
  return (
      <>
        <Router>
          <LoadingBar
            color='#dc3545'
            progress={progress}
            height={3}
            
          />
          <Navbar heading={"NEWS"} />
          <div className='container'>

            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress}   key={'general'} heading={"Top-News"} pageSize={9} country={'in'} category={'general'} />} />
              <Route exact path="/buisness" element={<News setProgress={setProgress}   key='buisness' heading={"Top-News"} pageSize={9} country={'in'} category={'buisness'} />} />
              <Route exact path="/science" element={<News setProgress={setProgress}   key={'science'} heading={"Top-News"} pageSize={9} country={'in'} category={'science'} />} />
              <Route exact path="/sports" element={<News setProgress={setProgress}   key={'sports'} heading={"Top-News"} pageSize={9} country={'in'} category={'sports'} />} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress}   key={'entertainment'} heading={"Top-News"} pageSize={9} country={'in'} category={'entertainment'} />} />
              <Route exact path="/health" element={<News setProgress={setProgress}   key={'health'} heading={"Top-News"} pageSize={9} country={'in'} category={'health'} />} />
              <Route exact path="/technology" element={<News setProgress={setProgress}   key={'technology'} heading={"Top-News"} pageSize={9} country={'in'} category={'technology'} />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  
}
export default App
