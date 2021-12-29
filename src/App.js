import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>

        <Route exact path='/about' element={<About />}></Route>

        
      </Routes>
      {/* <Router>
        <Navbar />
        <Home />

        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>

        </Routes>
      </Router> */}
    </>
  );
}

export default App;
