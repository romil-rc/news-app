import './App.css';
import Home from './components/Home';
import AllComponents from './components/AllComponents';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Article from './components/Article';

function App() {

  const pageSize = 7;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home q="world" pageSize={12} /> } />
          <Route exact path='/bollywood' element={ <AllComponents title="Bollywood" country="IN" category="entertainment" pageSize={pageSize} /> } />
          <Route exact path='/technology' element={ <AllComponents title="Technology" country="" category="technology" pageSize={pageSize} /> } />
          <Route exact path='/hollywood' element={ <AllComponents title="Hollywood" country="US" category="entertainment" pageSize={pageSize} /> } />
          <Route exact path='/fitness' element={ <AllComponents title="Fitness" country="" category="fitness" pageSize={pageSize} /> } />
          <Route exact path='/food' element={ <AllComponents title="Food" country="" category="food" pageSize={pageSize} /> } />
          {/* <Route exact path='/article/:id' element={< Article />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
