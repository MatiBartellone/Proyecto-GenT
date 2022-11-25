
import './App.css';
import React from 'react';

import Home from './components/home/home';
import Beneficios from './components/beneficios/beneficios';
import Banco from './components/banco/banco';

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/beneficios" element={<Beneficios/>}/>
        <Route path="/banco" element={<Banco/>}/>
        
        

      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
