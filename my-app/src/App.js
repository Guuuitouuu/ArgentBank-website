import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Index from './Pages/Index';
import Connexion from './Pages/Connexion';
import UserPage from './Pages/UserPage';



function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/login' element={<Connexion/>}/>
          <Route path='/user' element={<UserPage />}/>
      </Routes>
    </>
  );
}

export default App;
