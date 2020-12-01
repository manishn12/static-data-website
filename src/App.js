import React from 'react';
import {BrowserRouter, Route,} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TourList from './component/TourList';


function App() {
  return (
<BrowserRouter>

      <Navbar />
      <TourList />

   <Route path="/about" exact component={About} />
  
    </BrowserRouter>
    
  );
}

export default App;
