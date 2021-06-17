import React from 'react';

import MenuItem from '../menuItem/menuItem.component';

import PassionBuddha from '../../assets/Images/PassionBuddha.jpg';
import LuminousBuddha from '../../assets/Images/LuminousBuddha.jpg';
import RavenTotem from '../../assets/Images/RavenTotem.jpg';
import WhiteSerpent from '../../assets/Images/WhiteSerpent.jpg';
import PassionDai from '../../assets/Images/PassionDai.jpg';

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
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
      }]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map( ({ title, subTitle, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} subTitle={subTitle} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    )
  }
}

export default Directory;
