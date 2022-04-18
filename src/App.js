import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';


import './App.css';

import HomePage from './components/routes/Homepage/Homepage.component'

const Header = () => {
  return (
    <div>
      <div className="header">  
      <h1> Welcome To Daiensai's digital temple </h1>
      </div>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
      <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
        
export default App;
