import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//import defaultImage from '../images/'
export default function RoomOne({room}) {
  // get some of the properties of a room within the room array.
  const {name, slug, images, price} = room;
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0]} alt='single room' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/room/${slug}`} className='btn-primary room-link'>
          Features
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  )
}

RoomOne.propTypes = {
  room: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
 