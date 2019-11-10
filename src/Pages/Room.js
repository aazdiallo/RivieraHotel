import React from 'react';
import Hero from '../Components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../Components/Banner';
import RoomsContainer from '../Components/RoomsContainer';

export default function Rooms() {
    return (
    <>
        <Hero Hero='roomsHero'>
            <Banner title='Luxurious Rooms' subtitle='sleep better, wake up relaxed'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
        <RoomsContainer />
    </>
    );
}

