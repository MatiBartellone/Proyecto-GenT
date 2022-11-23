
import './App.css';
import React from 'react';

import Home from './components/home/home';


import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        
        

      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
