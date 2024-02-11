import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./Screens/Login";
import Invernaderos from "./Screens/Invernaderos"


function App(){
  return (
  <div className="">
    <Router>
      <NavBar />
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Invernaderos' element={<Invernaderos />}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
