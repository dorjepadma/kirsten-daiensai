import React from 'react';

import MenuItem from '../menuItem/menuItem.component';

import Teddy_Bear_1 from '../../assets/Images/Teddy_Bear_1.jpg';
import stars from '../../assets/Images/stars2.png';
import solarSystem from '../../assets/Images/solarSystem.jpg';
import starMusic from '../../assets/Images/starMusic.jpg';
import zodiac from '../../assets/Images/zodiac.png';

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'What is a Birth Tune Bear',
        subTitle: 'The story of Birth Tune Bears',
        imageUrl: [zodiac],
        id: 1
      },
      {
        title: 'The Astral Synth',
        subTitle: 'What is the Astral Synth',
        imageUrl: [stars],
        id: 2
      },
      {
        title: 'What is an Astral Tune',
        subTitle: 'What is an astral Tune',
        imageUrl: [solarSystem],
        id: 3
      },
      {
        title: 'Your Birth Tune',
        subTitle: 'Make your birth tune',
        imageUrl: [starMusic],
        size: 'large',
        id: 4
      },
      {
        title: 'Birth Tune Bears',
        subTitle: 'Choose your bear',
        imageUrl: [Teddy_Bear_1],
        size: 'large',
        id: 5
      }]
    }
  }
  render() {
    return (
      <div className='directoryMenu'>
        {this.state.sections.map( ({ title, subTitle, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} subTitle={subTitle} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    )
  }
}

export default Directory;
