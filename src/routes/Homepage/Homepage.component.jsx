import React from 'react';
import { Card } from 'react-bootstrap';


import Directory from '../../directory/directory.component';

import ZenDaiensai from '../../../assets/Images/ZenDaiensai.jpg';
import './Homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div>
    <Card className="daiensaiCard">
      <img src={ZenDaiensai} alt="Richard Kirsten Daiensai" />
        <h2>
          Richard Kirsten-Daiensai. 
        </h2>
        <p> Great Men live extraordinary lives</p>
    </Card>
    </div>
    
      <Directory/>
    
    <div>
      <a
          className="lineageLink"
          href="http://http://honshinfineart.com/"
          target="_blank"
          rel="noopener noreferrer"
        >While you are here visit his son Honshin's site:
          Honshin Fine Arts
        </a>
        </div>
        <div>
        <a
          className="lineageLink"
          href="https://serpentpainting.com"
          target="_blank"
          rel="noopener noreferrer"
        >While you are here visit his Grandson Dorje Shinno's site:
          Serpent Paintings
        </a>
        </div>    
  </div>
  
)
export default HomePage
