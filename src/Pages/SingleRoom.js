import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpg';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from '../Components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = RoomContext;
    //  componentDidMount(){}
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug); 
         if (!room) {
             return (
                 <div className='error'>
                     <h4>No such room found...</h4>
                     <Link to='/room' className='btn-primary'>Back To Rooms</Link>
                 </div>
             );
         }
        else
        {
            const {name, description, capacity, size, price, extras,
                 breakfast, pets, images} = room
            // Destructuring the images in the array
            // restOfImages will contain all items in images but the first one
            const [mainImage, ...restOfImages] = images;
             return (
            <>
                 <StyledHero img = {mainImage /* img is the prop passed from the
                                                StyledHero component */}>
                     <Banner title={`${name} room`} subtitle='your comfort is our priority'>
                         <Link to='/room' className='btn-primary'>Back To Rooms</Link>
                     </Banner>
                 </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {restOfImages.map((item, index)=>{
                            return <img key={index} src={item} alt={name} />;
                        })}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>Details:</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>Info:</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size} SQFT</h6>
                            <h6>Max Capacity: {
                                capacity > 1 ? `${capacity} People`: `${capacity} Person`
                            }</h6>
                            <h6>Pets: {pets?'Allowed':'Not Allowed'}</h6>
                            <h6>{breakfast && 'Free breakfast is provided'}</h6>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>Extras: </h6>
                    <ul className='extras'>
                        {extras.map((item, index)=>{
                            return <li key={index}>-{item}</li>;
                        })}
                    </ul>
                </section>
            </>
            );  
        }
        
    }
}

