
import './App.css';
import Header from './components/Header';
import React,{ useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Error from './components/Error';


function App() {
    
    
    
  return (
    <Router>
    <div className='App'>
      <Header/>
      
      <Routes>
      {/*Home*/}
      <Route path="/" element={<Home/>}/>
        
      

      {/*About*/}
      <Route path="/about" element={<About/>}/>
        
      

      {/*Contact*/}
      <Route path="/contact" element={<Contact/>}/>

      
      {/*Error*/}
      <Route path="*" element={<Error/>}/>
        
      
      
      </Routes>

      
      
      
      
    </div>
    </Router>
  );
}

export default App;
