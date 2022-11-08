import React from 'react';
import './App.css';
import Home from './components/Home';
import AllComponents from './components/AllComponents';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Article from './components/Article';

function App() {

  const pageSize = 7;
  const apiKey = process.env.REACT_APP_BLOG_PREP;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home q="world" apiKey={apiKey} pageSize={12} /> } />
          <Route exact path='/bollywood' element={ <AllComponents title="Bollywood" apiKey={apiKey} country="IN" category="entertainment" pageSize={pageSize} /> } />
          <Route exact path='/technology' element={ <AllComponents title="Technology" apiKey={apiKey} country="" category="technology" pageSize={pageSize} /> } />
          <Route exact path='/hollywood' element={ <AllComponents title="Hollywood" apiKey={apiKey} country="US" category="entertainment" pageSize={pageSize} /> } />
          <Route exact path='/fitness' element={ <AllComponents title="Fitness" apiKey={apiKey} country="" category="fitness" pageSize={pageSize} /> } />
          <Route exact path='/food' element={ <AllComponents title="Food" apiKey={apiKey} country="" category="food" pageSize={pageSize} /> } />
          {/* <Route exact path='/article/:id' element={< Article />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
