import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/LandingPage';
import Promociones from '../pages/Promociones';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/promociones" element={<Promociones/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
