import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../Components/Title';

// Defining a method that returns unique room per characteristics
const uniqueCharacteristics = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({rooms}) {
  /* To access the room context, we define a variable and 
     then set that variable equal to the RoomContext we 
     grabbed from our context file
  */ 
  const Context = useContext(RoomContext);
  // console.log(Context);
  const { /* accessing all the variables defined in the context file
             through our Context variable defined right above
          */   
    handleChange, type, capacity, price, minPrice, maxPrice, 
    size, minSize, maxSize, breakfast, pets
  } = Context;

  // call uniqueRoomType function to get its array content
  let roomType = uniqueCharacteristics(rooms, 'type');
  let numberOfGuests = uniqueCharacteristics (rooms, 'capacity');
  numberOfGuests = numberOfGuests.map(Number); // converting the array elements into ints
  numberOfGuests.reverse(); // Sort room capacity
  // add an All option to the list of roomType array
  roomType = ['all', ...roomType];

  // map characteristics to jsx
  roomType = roomType.map((item, index)=>{
    return (<option value={item} key={index}>{item}</option>);
  });

  numberOfGuests = numberOfGuests.map((item, index)=> {
    return (<option value={item} key={index}>{item}</option> );
  });

  return (
    <section className='filter-container'>
      <Title title='Search Rooms' />
      <form className='filter-form'>

        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>Room Type</label>
          <select name='type' id='type' value={type}
            className='form-control' onChange={handleChange}>
              {roomType}
            </select>
        </div>

        {/* Guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Total Guests</label>
          <select name='capacity' id='capacity' value={capacity}
            className='form-control' onChange={handleChange}>
              {numberOfGuests}
            </select>
        </div>
        {/* End of Select */}

        {/* Room Price */}
        <div className='form-group'>
          <label htmlFor='price'>Price ${price}</label>
            <input className='form-control' type='range' name='price'
              min={minPrice} max={maxPrice} id='price' value={price}
              onChange={handleChange}>
            </input>
        </div>
        {/* End of Room Price */}

        {/* Room Size */}
        <div className='form-group'>
          <label htmlFor='size'>Size {size} QFT</label>
            <input className='form-control' type='range' name='size'
              min={minSize} max={maxSize} id='size' value={size}
              onChange={handleChange}>
            </input>
        </div>
        {/* End of Room Size */}

        {/* Room Extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input type='checkbox' name='breakfast' id='breakfast'
              onChange={handleChange} checked={breakfast}>
            </input>
            <label htmlFor='breakfast'>breakfast</label>
          </div>   
          <div className='single-extra'>
            <input type='checkbox' name='pets' id='pets'
              onChange={handleChange} checked={pets}>
            </input>
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
        {/* End of Room Extras */}
      </form>
    </section>
  )
}
