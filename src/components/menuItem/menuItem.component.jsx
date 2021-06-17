import React from 'react';

import './menuItem.styles.scss'

const MenuItem = ({ title, subTitle, imageUrl, size }) => (
  <div className={`${size} menu-item`}
  //  onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>{subTitle}</span>
        </div>
    
  </div>
)

export default MenuItem;
