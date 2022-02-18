import './App.css';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Article from './components/Article';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/bollywood' element={ <Bollywood /> } />
          <Route exact path='/technology' element={ <Technology /> } />
          <Route exact path='/hollywood' element={ <Hollywood /> } />
          <Route exact path='/fitness' element={ <Fitness /> } />
          <Route exact path='/food' element={ <Food /> } />
          <Route exact path='/article' element={< Article />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
