import React from 'react';
import ZenDaiensai from './assets/Images/ZenDaiensai.jpg';
import './App.css';

import HomePage from './pages/Homepage/Homepage.component'

function App() {
  return (
    <div 
    className="App"
    >
      
        <img src={ZenDaiensai} className="App-logo" alt="logo" />
        <h2>
          Welcome to the future site of Kirsten-Daiensai. 
        </h2>
        <p> Great Men live extraordinary lives</p>
        <a
          className="App-link"
          href="http://http://honshinfineart.com/"
          target="_blank"
          rel="noopener noreferrer"
        >While you are here visit his son Honshin's site:
          Honshin Fine Arts
        </a>
        <a
          className="App-link"
          href="https://serpentpainting.com"
          target="_blank"
          rel="noopener noreferrer"
        >While you are here visit his Grandson's site:
          Serpent Paintings
        </a>
        <HomePage/>
    
    </div>
  );
}

export default App;
