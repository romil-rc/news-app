import React from 'react';
import './App.css';
import Home from './components/Home';
import AllComponents from './components/AllComponents';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Article from './components/Article';
import { homeData, bollywoodData, technologyData, hollywoodData, fitnessData, foodData } from './data/dataHandler';

function App() {

  const pageSize = 7;
  const apiKey = process.env.REACT_APP_BLOG_PREP;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home title="world" apiKey={apiKey} pageSize={12} data={homeData} /> } />
          <Route exact path='/bollywood' element={ <AllComponents title="Bollywood" apiKey={apiKey} category="entertainment" pageSize={pageSize} data={bollywoodData} /> } />
          <Route exact path='/technology' element={ <AllComponents title="Technology" apiKey={apiKey} category="technology" pageSize={pageSize} data={technologyData} /> } />
          <Route exact path='/hollywood' element={ <AllComponents title="Hollywood" apiKey={apiKey} category="entertainment" pageSize={pageSize} data={hollywoodData} /> } />
          <Route exact path='/fitness' element={ <AllComponents title="Fitness" apiKey={apiKey} category="fitness" pageSize={pageSize} data={fitnessData} /> } />
          <Route exact path='/food' element={ <AllComponents title="Food" apiKey={apiKey} category="food" pageSize={pageSize} data={foodData} /> } />
          {/* <Route exact path='/article/:id' element={< Article />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
