import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './components/routes/Homepage/Homepage.component'
import Header from './components/routes/Navigation/Navigation.component'
import SignIn from './components/routes/SignIn/SignIn.component'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
      <Route index element={<HomePage />}/>
      <Route path="signIn" element={<SignIn />}/>
      </Route>
    </Routes>
  );
}
        
export default App;
