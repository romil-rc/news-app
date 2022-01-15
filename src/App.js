import './App.css';
import Bollywood from './components/Bollywood';
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
          <Route exact path='/article' element={< Article />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
