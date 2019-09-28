import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomConsumer} from '../Context';
import Loading from './Loading';

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const {loading, sortedRooms, rooms} = value;
      if (loading){ // at the time rooms are loading display loading logo
        return <Loading />;
      }
      // when the rooms are fully loaded
      return (
      <div>
        <RoomsFilter rooms = {rooms} />
        <RoomsList rooms = {sortedRooms} />
      </div>  
      );
      }}
    </RoomConsumer>  
  );
}
