import { Outlet } from 'react-router-dom';
import React from 'react';


import Directory from '../../components/Directory/directory.component';
import PassionBuddha from '../../assets/Images/PassionBuddha.jpg';
import LuminousBuddha from '../../assets/Images/LuminousBuddha.jpg';
import RavenTotem from '../../assets/Images/RavenTotem.jpg';
import WhiteSerpent from '../../assets/Images/WhiteSerpent.jpg';
import PassionDai from '../../assets/Images/PassionDai.jpg';
import ZenDaiensai from '../../assets/Images/ZenDaiensai.jpg';

import './Homepage.styles.scss';


const Home = () => {
  const categories = [{
    title: `Daiensai's Life Story`,
    subTitle: 'The myth of Richard Kirsten Daiensai',
    imageUrl: [PassionDai],
    id: 1
  },
  {
    title: 'Prints',
    subTitle: 'Daiensai Prints',
    imageUrl: [PassionBuddha],
    id: 2
  },
  {
    title: 'Daiensai Philosophy',
    subTitle: 'Merging eastern and western mysticism',
    imageUrl: [RavenTotem],
    id: 3
  },
  {
    title: 'Sacred Serpent Paintings',
    subTitle: 'A single brush stroke tradition',
    imageUrl: [WhiteSerpent],
    size: 'large',
    id: 4
  },
  {
    title: 'The paintings of Daiensai',
    subTitle: 'Original Art Work of Daiensai',
    imageUrl: [LuminousBuddha],
    size: 'large',
    id: 5
  }];

  return (
  <div className='homepage'>
    <div>
    <div className="daiensaiCard">
      <img src={ZenDaiensai} alt="Richard Kirsten Daiensai" />
        <h2>
          Richard Kirsten-Daiensai. 
        </h2>
        <p> Great Men live extraordinary lives</p>
    </div>
    </div>
    <Directory categories={categories} />
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
        <Outlet />  
  </div>
  )
}
export default Home
