import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading';
import RoomOne from './RoomOne';
import Title from './Title';

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() { // featuredRooms is the variable from the context.js file
    let {loading, featuredRooms : rooms} = this.context;
    rooms = rooms.map(room => {
      return <RoomOne key={room.id} room={room} />
    });
    return (
      <section className='featured-rooms'>
        < Title title = 'Featured Rooms'/>
        <div className='featured-rooms-center'>
          { // render the loading logo if it takes some time to
            // load the room images/features
            loading?<Loading/>: rooms
          } 
        </div>
      </section>
    );
  }
}
