import React from 'react';
import { Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>

      <Route path="/"  element={<Home />} /> 

       <Route path="/about"  element={<About />}></Route>

      <Route path="/contact" element={<Contact />}></Route>

      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<Signup />}></Route> 
    </Routes>
   
    </>
  )
}

export default App
