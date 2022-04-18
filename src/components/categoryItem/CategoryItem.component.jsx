import React from 'react';

import './CategoryItem.styles.scss'

//the entire directory is received as a prop from the parent component
const CategoryItem = ({ title, subTitle, imageUrl, size }) => (
  <div className={`${size} category-item`}
  //  onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>{subTitle}</span>
        </div>
    
  </div>
)

export default CategoryItem;
