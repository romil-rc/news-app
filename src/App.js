import './App.css';
import Entertainment from './components/Entertainment';
import TechFit from './components/TechFit';
import Food from './components/Food'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Article from './components/Article';

function App() {

  const pageSize = 7;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home q="world" pageSize={12} /> } />
          <Route exact path='/bollywood' element={ <Entertainment title="Bollywood" country="in" category="entertainment" pageSize={pageSize} /> } />
          <Route exact path='/technology' element={ <TechFit title="Technology" category="technology" pageSize={pageSize} /> } />
          <Route exact path='/hollywood' element={ <Entertainment title="Hollywood" country="us" category="entertainment" pageSize={pageSize} /> } />
          <Route exact path='/health' element={ <TechFit title="Health" category="health" pageSize={pageSize} /> } />
          <Route exact path='/food' element={ <Food q="chicken" title="Food" category="food" pageSize={pageSize} /> } />
          <Route exact path='/article/:id' element={< Article />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
