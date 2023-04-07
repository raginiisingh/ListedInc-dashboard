import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin';
import Dashboardpage from './components/dashboard'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/db" element={<Dashboardpage />} />
      </Routes>
    </>
  );
}

export default App;
