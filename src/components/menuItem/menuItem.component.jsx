import React from 'react';

import './menuItem.styles.scss'

const MenuItem = ({ title, subTitle, imageUrl, size }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}className={`${size} menuItem`}>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subTitle'>{subTitle}</span>
        </div>
      </div>
)

export default MenuItem;
