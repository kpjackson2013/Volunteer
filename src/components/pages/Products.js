import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'; 


export default function Products() {
  return (
    <div className='products'>
    <h1>NEWS</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='https://cdn.pixabay.com/photo/2017/06/07/18/23/computer-2381149_960_720.jpg'
            text='Test High School Tech Lab Clean-up'
            label='Education'
            path='/services'
          />
          <CardItem
            src='https://previews.123rf.com/images/arinahabich/arinahabich1307/arinahabich130701020/20889494-community-gardening-in-urban-community-.jpg'
            text='Community Garden Landscaping'
            label='Community'
            path='/services'
          />
        </ul>
      </div>
    </div>
  </div>
  );
}