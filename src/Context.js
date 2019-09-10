import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext(); // Consumer Object

class RoomProvider extends Component { // Provider object
  state={
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  // Defining the getData method
  // getDat
  componentDidMount(){ // passing all itmes received from the import to the function
    //this.getData
    let rooms = this.FormatData(items); 
    // get all featured rooms from the list of rooms grabbed from items
    // and store those rooms in the featuredRooms array.
    let featuredRooms = rooms.filter(room => room.featured === true);

    //change the state of featured rooms
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

// Definition of FormatData function
FormatData(items){
  let tempItems = items.map(item => {
    let id = item.sys.id; // grab the id of every item from imported items
    
    // loop through every image and get its url.
    let images = item.fields.images.map(image => image.fields.file.url);

    /* we are accessing every property that is in the fields property we use ...this.fields,
       after copying all of the properties of the fields property, we then we add additional
       properties  */
    let room = {...item.fields, images:images /* could also just write images */, id};
    return room;
  });

  return tempItems;
}
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
