import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import Home from './routes/Homepage/Homepage.component'
import Navigation from './routes/Navigation/Navigation.component'
import Authentication from './routes/AuthenticationPage/Authentication.component'



const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path='SignIn' index element={<Authentication />}/>
      </Route>
    </Routes>
    </div>
  );
}
        
export default App;
