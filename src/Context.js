import React, { Component } from 'react';
//import items from './data';
import Client from './Contentful';
const RoomContext = React.createContext(); // Consumer Object

class RoomProvider extends Component { // Provider object
  state={
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    size: 0, // I added this
    minPrice: 0,
    maxPrice: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // Getting the data from contentful.
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'rivieraHotel',
        order: 'fields.price'
      });
      // console.log(response.items);
      let rooms = this.FormatData(response.items);
      // get all featured rooms from the list of rooms grabbed from items
      // and store those rooms in the featuredRooms array.
      let featuredRooms = rooms.filter(room => room.featured === true);
      // get maxPrice from the highest price in room data
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      //change the state of featured rooms
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        size: maxSize, // I added this
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount(){ // passing all itmes received from the import to the function
    this.getData()
    // let rooms = this.FormatData(items); 
    // // get all featured rooms from the list of rooms grabbed from items
    // // and store those rooms in the featuredRooms array.
    // let featuredRooms = rooms.filter(room => room.featured === true);
    // // get maxPrice from the highest price in room data
    // let maxPrice = Math.max(...rooms.map(item => item.price));
    // let maxSize = Math.max(...rooms.map(item => item.size));

    // //change the state of featured rooms
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   size: maxSize, // I added this
    //   maxPrice,
    //   maxSize
    // });

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

// getRoom function
getRoom = (slug) => {
  // get the room that has the slug passed within the link
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find((room) => room.slug === slug);

  return room;
};

// handling the change
handleChange = event => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = event.target.name;
  // Dynamiquely checking the state name
  this.setState({
    [name]:value
  }, this.filterRooms)
}

// filtering rooms
filterRooms = () => {
  let { // let's destructure our state values which is list of rooms
    rooms, type, capacity, price, /* minPrice, maxPrice, */
    size, /* minSize, maxSize, */ breakfast, pets
  } = this.state

  let tempRooms = [...rooms]; // Temporary array that takes all the rooms
  if (type !== 'all'){ // filter the rooms by type
    tempRooms = tempRooms.filter(room => room.type === type);
  }
  /* overwrite capacity to the one specified in the total guests
     select box in the page by parsing the value to an int
   */ capacity = parseInt(capacity);
   
  if (capacity !== 1){ // sort rooms by total guests
    tempRooms = tempRooms.filter(room => room.capacity >= capacity);
  }
  
  // filter the rooms by price
  price = parseInt(price); // parsing the price after getting it from the input tag
  tempRooms = tempRooms.filter(room => room.price <= price);

  // filter the rooms by their sizes
  size = parseInt(size); // parsing the room size
  tempRooms = tempRooms.filter(room => room.size <= size);

  // filter by breakfast availability
  if (breakfast){
    tempRooms = tempRooms.filter(room => room.breakfast === true);
  }

  // filter by pets availability
  if (pets){
    tempRooms = tempRooms.filter(room => room.pets === true);
  }

  // changing the list of rooms to currently specified features
  this.setState({
    sortedRooms:tempRooms
  })
}

  render() {
    return (
      <RoomContext.Provider value={{...this.state, 
        getRoom: this.getRoom, // passing in handleChange function
        handleChange: this.handleChange}
        /* making the getRom function available within our context */}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Defining the RoomConsumer
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
