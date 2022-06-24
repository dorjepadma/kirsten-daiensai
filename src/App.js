import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './routes/Homepage/Homepage.component'
import Navigation from './routes/Navigation/Navigation.component'
import Authentication from './routes/AuthenticationPage/Authentication.component'



function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<HomePage />}/>
      <Route path="SignIn" element={<Authentication />}/>
      </Route>
    </Routes>
    </div>
  );
}
        
export default App;
