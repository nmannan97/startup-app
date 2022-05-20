import './App.css';
import {Routes, Route} from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import About from './pages/About'
import Login from './pages/Login'

export default function App() {
  return (
  <div className="App"> 
      <header className="App-header">
        <div id="Title">
          Akashic Records 
        </div>
      </header>
      <div className="menu">
        <Routes>
          <Route exact path='/startup-app/' element={<Login/>} />
          <Route exact path='/startup-app' element={<Login/>} />
          <Route exact path='/startup-app/mainpage' element={<Mainpage/>}/>
          <Route exact path='/startup-app/about' element={<About />}/>
        </Routes>
      </div>
  </div>
  );
}

