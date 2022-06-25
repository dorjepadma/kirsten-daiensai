import React from 'react';
import { Container } from 'react-bootstrap';


import './menuItem.styles.scss';

const MenuItem = ({category}) => {
  const {title, subTitle, imageUrl, size, history, linkUrl} = category;
  return (
    
  <Container className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/> 
        <div className ='content'>
          <h1 className = 'title'>{title}</h1>
          <span className ='subtitle'> {subTitle}</span>
        </div>
      </Container>)
}

export default MenuItem;
