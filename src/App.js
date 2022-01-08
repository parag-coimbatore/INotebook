import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';

function App() {
  const [alert, setalert] = useState(null);  //to show alert message
  const showAlert = (message, type) => {  //This function take message and type and will be called
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {   //This determines the time for which alert will occur
      setalert(null);
    }, 3000);
  }
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert} />}></Route>

            <Route exact path='/about' element={<About showAlert={showAlert}/>}></Route>

            <Route exact path='/login' element={<Login showAlert={showAlert}/>}></Route>

            <Route exact path='/signup' element={<SignUp showAlert={showAlert}/>}></Route>
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
