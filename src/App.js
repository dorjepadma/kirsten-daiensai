import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './components/routes/Homepage/Homepage.component'
import Header from './components/routes/Navigation/Navigation.component'



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
